import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const TitleImage = () => {
    const title = "Combined years of expertise within digital industries"

    return (
        <>
            <div className={styles.about_title}>
                <div className={styles.title_container}>
                    <p>{we}</p>
                </div>
            </div>
        </>
    )
}

export default TitleImage