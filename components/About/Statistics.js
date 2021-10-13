import Grid from '../Common/Grid'
import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const Statistics = () => {
    const title = "Our multidisciplinary approach give us the toolkit, ability, and vision to take any digital consumer experience from idea to launch across several industries"
    const titleTwo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    const sales = "We have helped our client generate over £350 million directly through the digital platforms we have designed and built."
    const tools = "Software is at the centre of what we do, we’ve equipped ourselves with the skills required across 54 software languages and tools such as PHP, React.js, Tableau, Jira and many more."
    const experience = "Our team of creative technologists are what makes TechTee so special. Collectively we hold over 217 years of experience within digital and software that we are proud share with our clients."

    return (
        <>
            <SectionTitle title="Approach" />
            <p className={styles.heading_font}>{title}</p>
            <Row className={styles.about_stats}>
                <Col sm={{ span: 12 }} md={{ offset: 6, span: 6 }}>
                    <p>{titleTwo}</p>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 12 }} md={{ offset: 6, span: 6 }}>
                    <Grid>
                        <div>
                            <p className={styles.heading_font}>£350m+</p>
                            <p>Generated for our clients through the products we've designed and built</p>
                        </div>
                        <div>
                            <p className={styles.heading_font}>200+</p>
                            <p>Years of industry experience across the experts within our team</p>
                        </div>
                    </Grid>
                </Col>
            </Row>
        </>
    )
}

export default Statistics