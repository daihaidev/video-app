import Fade from 'react-reveal/Fade'
import styles from '../../styles/Work.module.scss'

const CaseStudyFooter = ({ client, project, categories, slug }) => {
    const next = "Next Project";

    return (
        <div className={styles.case_study_footer}>
            <Fade>
                <p className={styles.next_title}>{next}</p>
            </Fade>
            <a href={`/work/${slug}`}>
                <div className={styles.next_case_details}>
                    <Fade>
                        <p className={`${styles.next_case_company} ${styles.primary_font}`}>{client}</p>
                        <p className={styles.next_case_project}>{project}</p>
                        <p className={styles.next_case_services}>{categories}</p>
                    </Fade>
                </div>
                <div className={styles.small}></div>
            </a>
        </div>
    )
}

export default CaseStudyFooter;
