import Head from 'next/head'
import CoverTitle from '../components/Home/CoverTitle'
import About from '../components/Home/About'
import SelectedWork from '../components/Home/SelectedWork'
import Clients from '../components/Home/Clients'
import Quote from '../components/Home/Quote'
import FeaturedArticle from '../components/Home/FeaturedArticle'
import styles from '../styles/Common.module.scss'
// import Crawler from '../components/Common/Crawler'
// import Article from '../components/Home/Article'

const home = () => {
  const title = "TechTee is where powerful technology meets exceptional design to create complete consumer experiences"

  return (
    <>
      <Head>
        <title>TechTee | An Exceptional Digital Design Agency</title>
        <meta name="theme-color" content="#17addf" />
      </Head>
      <div className={styles.page}>
        <CoverTitle />
        <div className={styles.medium_spacer} />
        <About />
        <div className={styles.medium_spacer} />
        <SelectedWork />
        <div className={styles.medium_spacer} />
        <Clients />
        <div className={styles.medium_spacer} />
        <Quote />
        <div className={styles.medium_spacer} />
        <FeaturedArticle />
      </div>
    </>
  )
}

export default home;