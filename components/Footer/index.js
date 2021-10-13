import styles from '../../styles/Footer.module.scss'

const Footer = () => {
  const want = "Want to work with us? Get in touch."
  const hello = "hello@techtee.co"
  const telephone = "+442080135040"

  return (
    <>
      <div className={styles.medium_spacer} />
      <footer className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.contact}>
            <p>{want}</p>
            <p className={`${styles.content} ${styles.primary_font}`}>{hello}</p>
            <p className={`${styles.content} ${styles.primary_font}`}>{telephone}</p>
          </div>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/company/techteeltd" target="blank">LinkedIn &rarr;</a>
            <a href="https://www.instagram.com/techtee.co/?hl=en" target="blank">Instagram &rarr;</a>
            <a href="https://medium.com/@techtee" target="blank">Medium &rarr;</a>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <p className={styles.copy}>&copy; TechTee 2021. All rights reserved. "TechTee" is a registered trademark of TechTee Limited.</p>
          </div>
          <div className={styles.blm}>
            <a href="https://blacklivesmatter.com/" target="blank">Black Lives Matter &rarr;</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
