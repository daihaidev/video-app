import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/Home.module.scss'

const About = () => {
    const techtee = "TechTee is a digital agency and software house creating 360° digital experiences and solutions users love by embracing the intersection of cutting-edge technology and beautiful, consumer-focused design"

    return (
        <>
            <SectionTitle title="About Us" />
            <Row className={`${styles.home_service} ${styles.heading_font}`}>
                <Col>
                    <p>1.0 ― Digital Strategy</p>
                    <p>2.0 ― User Experience</p>
                    <p>3.0 ― Design</p>
                    <p>4.0 ― Sofware Development</p>
                </Col>
            </Row>
        </>
    )
}

export default About