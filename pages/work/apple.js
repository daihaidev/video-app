import Head from 'next/head'
import CaseHeader from '../../components/Work/CaseHeader'
import ImageBox from '../../components/Common/ImageBox'
import Fade from 'react-reveal/Fade'
import styles from '../../styles/Work.module.scss'

const apple = () => {
  const client_intro = "As one of our longest clients, Apple has been a great opportunity for TechTee to show off those oh so special software development skills. With Apple, we initially began working with them to build native analytic tools for Apple.com. As our working relationship grew, so did our influence on strategy, user experience, and design and we continue to have such a great time designing and building innovative technology for Apple.com alongside their teams."

  return (
    <>
      <Head>
        <title>TechTee | Apple</title>
      </Head>
      <div className={styles.case_study}>
        <CaseHeader
          client="Apple"
          project="Apple.com"
          categories="Strategy, Design, Software Development, Analytical Development"
          date="Since 2018"
          intro={client_intro}
        />
        <Fade>
          <ImageBox
            alt="TechTee x Apple"
            publicId="techtee-website/work/apple-one.png"
          />
        </Fade>
        <Fade>
          <div className={styles.last_work}>
            <a href="/work">More work from TechTee &rarr;</a>
          </div>
        </Fade>
        <div className={styles.small}></div>
      </div>
    </>
  )
}

export default apple;
