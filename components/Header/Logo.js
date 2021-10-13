import Link from 'next/link'
import styles from '../../styles/Header.module.scss'

const Logo = ({ alter, toggleNavbar }) => {
  const clickHandler = () => {
    if (!alter) return null;
    else toggleNavbar();
  }

  return (
    <Link href="/" passHref>
      <a className={`${styles.logo} ${alter && styles.alter}`} onClick={clickHandler}>
        <div className={`${styles.icon} ${alter && styles.alter}`}>
          <div className={`${styles.orbit} ${alter && styles.alter}`}></div>
          <div className={`${styles.dotTop} ${alter && styles.alter}`}></div>
          <div className={`${styles.dotRight} ${alter && styles.alter}`}></div>
          <div className={`${styles.dotBottom} ${alter && styles.alter}`}></div>
          <div className={`${styles.dotLeft} ${alter && styles.alter}`}></div>
        </div>
        {/* <div className={styles.techtee}>TECHTEE</div> */}
      </a>
    </Link>
  )
}

export default Logo