import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import * as prismic from '@prismicio/client'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

import { FiCalendar, FiUser } from 'react-icons/fi';

import Header from '../components/Header';
import Head from 'next/Head';
import Link from 'next/link';

import { useState } from 'react';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const [posts, setPosts] = useState<Post[]>(postsPagination.results);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);

  console.log(posts)

  async function loadMorePosts(): Promise<void> {
    const response = await fetch(nextPage);
    const json = await response.json();

    const newPosts = json.results.map((post: Post) => {
      return {
        uid: post.uid,
        first_publication_date: post.first_publication_date,
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
        },
      };
    });
    setPosts(prevState => [...prevState, ...newPosts]);
    setNextPage(json.next_page);
  }

  return(
    <>
      <Head>
        <title>Home | SpaceTraveling</title>
      </Head>
      <div className={styles.homeContainer}>
        <main className={commonStyles.commonContainer}>
          <Header/>
          {posts.map(post => (
            <Link href={`/post/${post.uid}`} key={post.uid}>
              <section key={post.uid}>
                <h1 className={commonStyles.Title}>{post.data.title}</h1>
                <p className={commonStyles.Content}>{post.data.subtitle}</p>
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
                </div>
              </section>
            </Link>
          ))}
          {(nextPage != null)
          ? <a
              className={styles.loadButton}
              onClick={loadMorePosts}
            >Carregar mais posts</a>
          : ''}
        </main>
      </div>
    </>
  )

//renderizar o botão de o valor de next_page retornado pelo prismic for != null
}

export const getStaticProps: GetStaticProps = async () => {

  const client = getPrismicClient()

  const documents = await client.getByType('posts', {
    pageSize: 1,
  });

  const posts = documents.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      }
    }
  })

  const postsPagination = {
    next_page: documents.next_page,
    results: posts,
  }

  return {
    props: {
      postsPagination,
    },
  }
}