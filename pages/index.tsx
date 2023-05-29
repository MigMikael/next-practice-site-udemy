import styles from '../shared/globals.module.css'
import Header from '../components/header'
import Navigation from '../components/navigation'
import { InferGetStaticPropsType } from 'next'
import { getPostList } from '../shared/util' 

type PostList = string[]

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("posts", posts)
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <Header />
        <h1>Next Website</h1>
        <hr />
        {posts && posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                {slug.replace(/-/g, ' ')}
              </li>
            ))}
          </ul>
        )}
        <hr />
        <h4>Adapt from udemy course</h4>
        <a href="https://www.udemy.com/course/nextjs-up-and-running/">
          NextJS up and running
        </a>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  console.log("get static props")
  const posts: PostList = getPostList()
  console.log("get static props", posts)
  return {
    props: {
      posts
    }
  }
}