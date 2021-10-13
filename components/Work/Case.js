import { Row, Col } from 'react-bootstrap'
import Grid from '../Common/Grid'
import styles from '../../styles/Work.module.scss'

const Case = ({ caseImage, client, project, categories, slug }) => {

  return (
    <>
      <div className={styles.a_case}>
        <a href={`/work/${slug}`}>
          <div className={styles.case_details}>
            <p className={styles.work_details_client}>{client}</p>
            <p className={styles.project}>{project}</p>
            <p>{categories}</p>
          </div>
          <div className={styles.case_image} style={{ backgroundImage: `url(${caseImage})`, backgroundPosition: `top center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, height: `20em` }}>
          </div>
        </a>
      </div>
    </>
  )
}

export default Case;
