import Head from 'next/head'
import ContactFrom from '../components/Contact/ContactForm'
import Offices from '../components/Contact/Offices'
import Careers from '../components/Contact/Careers'
import ImageTitle from '../components/Common/ImageTitle'
import styles from '../styles/Common.module.scss'

const contact = () => {

  return (
    <>
      <Head>
        <title>TechTee | Contact</title>
      </Head>
      <ImageTitle 
        title="Contact"
        imageUrl="https://res.cloudinary.com/du9qcctlw/image/upload/v1626123237/sohohouseone.jpg"
      />
      <div className={styles.page}>
        <ContactFrom />
        <Offices />
        <div className={styles.medium_spacer} />
        <Careers />
      </div>
    </>
  )
}

export default contact;
