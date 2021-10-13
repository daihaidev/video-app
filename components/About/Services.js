import Grid from '../Common/Grid'
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const Services = () => {
    const lorem = "Lorem Ipsum is simply dummy text of the printing"
    const strategy = "Decades of industry experiences across multiple digital verticals, supported by software developers and designers, allows to think beyond limitations and provide outstanding 360° solutions"
    const ux = "As the only agency that researches the fastest growing e-commerce demographic in the world; black women, we investigate every element of target users to produce effective UX solutions"
    const design = "From graphic to user interface and motion design, our design teams are the beginning of where creative ideas are materialised and the boundaries of design propelled"
    const software = "Our full-stack software development teams comprise of creative technologists with limitless development experience, who transform designs into exceptional web and mobile software platforms"
    const paragraphTwo = "As creative technologists we're not limited by building experiences for our clients as our teams are comprised of digital strategists, user experience researchers, and designers, and full-stack software developers and testers"

    return (
        <>
            <SectionTitle title="Services" />
            <Row>
                <Col sm={{ span: 12 }} md={{ span: 6 }}>
                    <p className={styles.heading_font}>{lorem}</p>
                </Col>
                <Col sm={{ span: 12 }} md={{ span: 6 }}>
                    <p className={styles.about_services}>{paragraphTwo}</p>
                </Col>
            </Row>
            <Row className={styles.the_list}>
                <Col sm={{ span: 12 }} md={{ offset: 6, span: 6 }}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Digital Strategy
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row>
                                        <Col sm={{ span: 6 }} md={{ span: 6 }}>
                                            <div className={styles.dots_wrapper}>
                                                <div className={styles.dots}>
                                                    <div className={styles.dots_inner_wrapper}>
                                                        <div className={`${styles.service_dot} ${styles.top_service_dot} ${styles.active_dot}`}></div>
                                                    </div>
                                                </div>
                                                <div className={styles.dots}>
                                                    <div className={styles.dots_inner_wrapper}>
                                                        <div className={styles.service_dot}></div>
                                                    </div>
                                                    <div className={styles.dots_inner_wrapper}>
                                                        <div className={styles.service_dot}></div>
                                                    </div>
                                                    <div className={styles.dots_inner_wrapper}>
                                                        <div className={styles.service_dot}></div>
                                                    </div>
                                                </div>
                                                <div className={styles.dots}>
                                                    <div className={styles.dots_inner_wrapper}>
                                                        <div className={`${styles.service_dot} ${styles.bottom_service_dot}`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={{ span: 6 }} md={{ span: 6 }}>
                                            <p>{strategy}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    User Experience
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <div className={styles.dots_wrapper}>
                                        <div className={styles.dots}>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={`${styles.service_dot} ${styles.top_service_dot}`}></div>
                                            </div>
                                        </div>
                                        <div className={styles.dots}>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={styles.service_dot}></div>
                                            </div>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={styles.service_dot}></div>
                                            </div>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={`${styles.service_dot} ${styles.active_dot}`}></div>
                                            </div>
                                        </div>
                                        <div className={styles.dots}>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={`${styles.service_dot} ${styles.bottom_service_dot}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                    {strategy}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Design
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <div className={styles.dots_wrapper}>
                                        <div className={styles.dots}>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={`${styles.service_dot} ${styles.top_service_dot}`}></div>
                                            </div>
                                        </div>
                                        <div className={styles.dots}>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={styles.service_dot}></div>
                                            </div>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={styles.service_dot}></div>
                                            </div>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={`${styles.service_dot} ${styles.active_dot}`}></div>
                                            </div>
                                        </div>
                                        <div className={styles.dots}>
                                            <div className={styles.dots_inner_wrapper}>
                                                <div className={`${styles.service_dot} ${styles.bottom_service_dot}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                    {design}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Software Development
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <div className={styles.service}>
                                        <div className={styles.dots_wrapper}>
                                            <div className={styles.dots}>
                                                <div className={styles.dots_inner_wrapper}>
                                                    <div className={`${styles.service_dot} ${styles.top_service_dot}`}></div>
                                                </div>
                                            </div>
                                            <div className={styles.dots}>
                                                <div className={styles.dots_inner_wrapper}>
                                                    <div className={`${styles.service_dot} ${styles.active_dot}`}></div>
                                                </div>
                                                <div className={styles.dots_inner_wrapper}>
                                                    <div className={styles.service_dot}></div>
                                                </div>
                                                <div className={styles.dots_inner_wrapper}>
                                                    <div className={styles.service_dot}></div>
                                                </div>
                                            </div>
                                            <div className={styles.dots}>
                                                <div className={styles.dots_inner_wrapper}>
                                                    <div className={`${styles.service_dot} ${styles.bottom_service_dot}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                        {software}
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </>
    )
}

export default Services