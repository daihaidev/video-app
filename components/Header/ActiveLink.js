import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Header.module.scss'

const ActiveLink = ({href, children, isOther = false, toggleNavbar}) => {
  const { asPath } = useRouter();
  const active = asPath === href;
  const clickHandler = () => {
    if (active) return null;
    else toggleNavbar();
  }

  return (
    <Link href={href} passHref>
      <a className={`${styles.nav_item} ${active && styles.active}`} href={href} onClick={clickHandler}>
        {children}
        {!isOther && (
          <div>
            <div/>
          </div>
        )}
      </a>
    </Link>
  )
}

export default ActiveLink