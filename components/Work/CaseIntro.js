import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Work.module.scss'

const CaseIntro = ({ text }) => {

    return (
        <>
            <Row>
                <Col sm={{ span: 12 }} md={{ span: 6 }} className={styles.case_intro}>
                    <p>{text}</p>
                </Col>
            </Row>
            <div className={styles.small_spacer} />
        </>
    )
}

export default CaseIntro;
