import Head from 'next/head'
import Founder from '../components/About/Founder'
import ImageTitle from '../components/Common/ImageTitle'
import ClientList from '../components/About/ClientList'
import Services from '../components/About/Services'
import Statistics from '../components/About/Statistics'
import Introduction from '../components/About/Introduction'
import styles from '../styles/Common.module.scss'

const about = () => {

  return (
    <>
      <Head>
        <title>TechTee | About</title>
      </Head>
      <ImageTitle
        title="We are creative technologists"
        imageUrl="https://res.cloudinary.com/du9qcctlw/image/upload/v1626126294/work_two.jpg"
      />
      <div className={styles.page}>
        <Introduction />
        <div className={styles.medium_spacer} />
        <Services />
        <div className={styles.medium_spacer} />
        <ClientList />
        <div className={styles.medium_spacer} />
        <img src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624219970/techtee-website/articles/forbes_under_30.png" />
        <div className={styles.medium_spacer} />
        <Statistics />
        <div className={styles.medium_spacer} />
        <Founder />
      </div>
    </>
  )
}

export default about;
