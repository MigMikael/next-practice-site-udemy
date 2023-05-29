import styles from '../shared/globals.module.css'
import Header from '../components/header'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <Header />
        <h1>Next Website</h1>
        <hr />
        <h4>Adapt from udemy course</h4>
        <a href="https://www.udemy.com/course/nextjs-up-and-running/">
          NextJS up and running
        </a>
      </main>
    </>
  )
}
