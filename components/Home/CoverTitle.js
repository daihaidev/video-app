import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Home.module.scss'

const CoverTitle = () => {
    const techtee = "TechTee is a digital agency and software house creating 360° digital experiences and solutions users love by embracing the intersection of cutting-edge technology and beautiful, consumer-focused design"

    return (
        <>
            <div className={styles.home_cover}>
                <p className={styles.home_title}>
                    Where Powerful Technology <br />
                    Meets Exceptional Design <br />
                    To Create Complete Consumer Experiences
                </p>
                <Row className={styles.home_intro}>
                    <Col sm={{ span: 6 }} md={{ offset: 6, span: 6 }}>
                        <p>{techtee}</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CoverTitle