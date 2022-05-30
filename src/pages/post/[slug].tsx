import { GetStaticPaths, GetStaticProps } from 'next';
import * as prismic from "@prismicio/client";
import Head from 'next/head';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import Header from '../../components/Header';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import { RichText } from 'prismic-dom';
import { useRouter } from 'next/router';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const totalWords = post.data.content.reduce((total, contentItem) => {
    total += contentItem.heading.split(' ').length;

    const words = contentItem.body.map(item => item.text.split(' ').length);
    words.map(word => (total += word));
    return total;
  }, 0);
  const readTime = Math.ceil(totalWords / 200);

  return(
    <>
      <Head>
        <title>Home | Como utilizar hooks</title>
      </Head>
    
      <div className={styles.postContainer}>
        <main className={styles.postContent}>
          <Header padding="0 10rem"/>
          <article>
            <figure className={styles.banner}>
              <img src={post.data.banner.url} alt="Post banner" />
            </figure>
            <div className={styles.center}>
              <h1 className={commonStyles.Title}>{post.data.title}</h1>
              <div className={commonStyles.Informacions}>
                <div className={commonStyles.Informacion}>
                  <FiCalendar/>
                  <p>
                    <time>{
                      format(
                        new Date(post.first_publication_date),
                        'dd MMM yyyy',
                        {
                          locale: ptBR,
                        }
                      )
                    }</time>  
                  </p>
                </div>
                <div className={commonStyles.Informacion}>
                  <FiUser/>
                  <p>{post.data.author}</p>
                </div>
                <div className={commonStyles.Informacion}>
                  <FiClock/>
                  <p>
                    <time>
                      {readTime} min
                    </time>  
                  </p>
                </div>
              </div>
              <br /> <br />

              {post.data.content.map(content => {
                return (
                  <article key={content.heading}>
                    <h2 className={commonStyles.Title}>{content.heading}</h2>
                    <div
                      className={commonStyles.Content}
                      dangerouslySetInnerHTML={{
                        __html: RichText.asHtml(content.body),
                      }}
                    />
                  </article>
                );
              })}
            </div>
          </article>
        </main>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});

  const postsResponse = await prismic.getByType('posts',{
    pageSize: 1,
  });

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
    };
  });

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.uid,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient({});
  const response = await prismic.getByUID('posts', String(slug));

  console.log(response);

  const post = {
    first_publication_date: response.first_publication_date,
    uid: response.uid,
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.author,
      content: response.data.content.map(post => {
        return {
          heading: post.heading,
          body: post.body,
        };
      }),
      subtitle: response.data.subtitle,
    },
  }

  console.log(post);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60, // 1 hr
  }
};
