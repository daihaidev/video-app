import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/Home.module.scss'

const Quote = () => {
    const quote = "Your business is filled with true talent, we're glad to have you with us."
    const by = "― Head of Apple Online Team (EMEA)"

    return (
        <>
            <SectionTitle title="What They Say" />
            <div className={styles.quote}>
                <Row>
                    <Col sm={{ span: 12 }} md={{ span: 6 }}>
                        <p className={styles.heading_font}>"{quote}"</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 12 }} md={{ offset: 6, span: 6 }} className={styles.who}>
                        <p>{by}</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Quote