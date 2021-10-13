import Link from 'next/link'
import ActiveLink from './ActiveLink'
import styles from '../../styles/Header.module.scss'

const links = [
  {
    id: 1,
    link: "/about",
    title: "About"
  },
  {
    id: 2,
    link: "/work",
    title: "Work"
  },
  {
    id: 3,
    link: "/contact",
    title: "Contact"
  },
  {
    id: 4,
    link: "/articles",
    title: "Articles"
  }
]

const Navbar = ({ open, toggleNavbar }) => {

  return (
    <>
      {/* <nav className={`${styles.nav} ${open && styles.open}`}>
        {links.map(({ id, link, title }) => (
          <ActiveLink key={id} href={link} toggleNavbar={toggleNavbar}><span className={styles.tertiary_font}>{title}</span></ActiveLink>
        ))}
      </nav> */}
      {/* <nav className={styles.nav_desktop}>
        <div className={styles.nav_links}>
          {links.map(({ id, link, title }) => (
            <ActiveLink key={id} href={link}>{title}</ActiveLink>
          ))}
          <ActiveLink isOther href="/contact">Get In Touch &rarr;</ActiveLink>
        </div>
      </nav> */}
      <div className={`${styles.hamburger} ${open && styles.open}`} onClick={toggleNavbar}></div>
    </>
  )
}

export default Navbar