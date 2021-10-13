// import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Common.module.scss'

const SectionTitle = ({ title }) => {

  return (
    <>
        <div className={styles.section}>
            <p>{title}</p>
        </div>
    </>
  )
}

export default SectionTitle