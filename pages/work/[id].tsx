import { useRouter } from 'next/router';
import Image from 'next/image';

import { Layout, Container } from '../../components';
import { getAllContentIds, getContentData } from '../../lib/content';
import { IContentData } from '../articles/[id]';
import { StyledContent } from '../../components/styles/content.styles';

/**
 *  Renders work markdown posts
 */

const Article = ({ workData }) => {
  const { pathname } = useRouter();
  const { title, contentHtml, description } = workData;

  return (
    <Layout pageTitle={title} pathname={pathname} pageDescription={description}>
      <Container width="narrow">
        <StyledContent>
          <div className="largeTextTime">
            <time>{workData.date}</time>
          </div>
          {workData.previewImage && (
            <div className="mainImageContainer">
              <Image
                src={workData.previewImage}
                alt="Main Image"
                height={550}
                width={1200}
                className="mainImage"
                priority
              />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </StyledContent>
      </Container>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds('work');
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const workData: IContentData = await getContentData(params.id, 'work');
  return {
    props: {
      workData,
    },
  };
};

export default Article;
