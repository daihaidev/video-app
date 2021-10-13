import { useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import styles from '../../styles/Header.module.scss'

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNavbar = () => setNav(!nav);

  return (
    <header className={styles.header}>
      <Logo alter={nav} toggleNavbar={toggleNavbar} />
      <Navbar open={nav} toggleNavbar={toggleNavbar} />
    </header>
  )
}

export default Header