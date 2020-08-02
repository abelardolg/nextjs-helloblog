// Add this line to imports
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/postsMD'
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }

    /*
    https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
    return [
  {
    params: {
      // Statically Generates /posts/a/b/c
      id: ['a', 'b', 'c']
    }
  }
  //...
]
*/
  }

export async function getStaticProps({ params }) {
    // params.id will be like ['a', 'b', 'c']
//  https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
    const postData = await getPostData(params.id)
    return {
        props: {
        postData
        }
    }
}