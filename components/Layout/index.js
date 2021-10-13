import { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import useWindowSize from '../../utils/useWindowSize';
import styles from '../../styles/Layout.module.scss';

const Layout = ({ children }) => {
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    const createCustomUnit = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', createCustomUnit);
    return () => window.removeEventListener('resize', createCustomUnit);
  }, [windowWidth, windowHeight])

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
