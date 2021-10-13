import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const ClientList = () => {
    const clients = "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard"

    return (
        <>
            <SectionTitle title="Clients" />
            <Row>
                <Col sm={{ span: 12 }} md={{ span: 8 }}>
                    <p className={styles.heading_font}>{clients}</p>
                </Col>
            </Row>
            <Row className={styles.clients}>
                <Col sm={{ span: 12 }} md={{ offset: 6, span: 3 }}>
                    <p>― Farfetch</p>
                    <p>― Apple</p>
                    <p>― La Perla</p>
                    <p>― Marks & Spencer</p>
                    <p>― Nike</p>
                    <p>― LAPP</p>
                </Col>
                <Col sm={{ span: 12 }} md={{ span: 3 }}>
                    <p>― Penhaligons</p>
                    <p>― Koya</p>
                    <p>― Black Ballad</p>
                    <p>― Gucci</p>
                    <p>― Thomson Reuters</p>
                    <p>― Deutsche Banka</p>
                </Col>
            </Row>
        </>
    )
}

export default ClientList