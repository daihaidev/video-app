import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const Introduction = () => {
    const techtee = "TechTee is a digital agency and software house creating 360° digital experiences and solutions users love by embracing the intersection of cutting-edge technology and beautiful, consumer-focused design"

    return (
        <>
            <Row>
                <Col sm={{ span: 12 }} md={{ offset: 6, span: 6 }}>
                    <p className={styles.about_intro}>{techtee}</p>
                </Col>
            </Row>
        </>
    )
}

export default Introduction