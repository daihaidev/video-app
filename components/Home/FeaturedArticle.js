import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import ArrowLink from '../Common/ArrowLink'
import styles from '../../styles/Home.module.scss'

const FeaturedArticle = () => {

    return (
        <>
            <SectionTitle title="What We Say" />
            <Row>
                <Col sm={{ span: 12 }} md={{ span: 4 }}>
                    <img src="https://res.cloudinary.com/du9qcctlw/image/upload/v1625905705/test.jpg" />
                </Col>
                <Col sm={{ span: 12 }} md={{ span: 8 }}>
                    <p></p>
                </Col>
            </Row>
        </>
    )
}

export default FeaturedArticle