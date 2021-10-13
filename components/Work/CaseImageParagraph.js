import { Row, Col } from 'react-bootstrap'
import styles from '../../styles/Work.module.scss'

const CaseImageParagraph = ({ heading, paragraph, image }) => {

    return (
        <>
            <Row className={styles.case_paragraph}>
                <Col sm={{ span: 12 }} md={{ span: 6 }}>
                    <p className={styles.case_paragraph_title}>{heading}</p>
                    <p className={styles.case_paragraph_text}>{paragraph}</p>
                </Col>
            </Row>
            <Row>
                <Col sm={{ span: 12 }} md={{ offset: 6, span: 6 }}>
                    <img src={`${image}`}/>
                </Col>
            </Row>
        </>
    )
}

export default CaseImageParagraph
