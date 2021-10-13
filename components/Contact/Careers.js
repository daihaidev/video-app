import Grid from '../Common/Grid'
import { Row, Col, Accordion, Card, Button } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/Contact.module.scss'

const Careers = () => {
    const about = "It's the people in our teams that make TechTee special. We look for creative individuals with their own stories, ideas, and personalities from all over the world to contribute to making memorable digital experiences."
    const executive_assistant = "We're seeking a bright and motivated assistant with an interest in the digital world to support our leadership team with their daily responsibilities as an Executive Assistant. From scheduling meetings to liaising with C-suite clientele, a well organised individual with strong time keeping and organisational skills is necessary."
    const marketing_content = "A Marketing Content Creator at TechTee will be responsible for the creation of content and the maintaining TechTee's online digital presence. Working across our Instagram and LinkedIn accounts, this is a marketing focused role with an emphasis on design, hence experience with Sketch and Figma would be beneficial."

    return (
        <>
            <SectionTitle title="Careers" />
            <div className={styles.careers_intro}>
                <Grid>
                    <div className={styles.heading_font}>Join the team</div>
                    <div>{about}</div>
                </Grid>
            </div>
            <div className={styles.careers}>
                <p className={styles.role_type}>Permanent</p>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Executive Assistant
                            </Accordion.Toggle>
                            <p>London</p>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Grid>
                                    <div>
                                        {executive_assistant}
                                    </div>
                                    <div>
                                        <p>― Lorem ipsum is a dummy text</p>
                                        <p>― Lorem ipsum is a dummy text</p>
                                        <p>― Lorem ipsum is a dummy text</p>
                                        <p>― Lorem ipsum is a dummy text</p>
                                        <p>― Lorem ipsum is a dummy text</p>
                                        <p>― Lorem ipsum is a dummy text</p>
                                        <p>― Lorem ipsum is a dummy text</p>
                                    </div>
                                </Grid>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Marketing Content Creator
                            </Accordion.Toggle>
                            <p>Remote (UK)</p>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>{marketing_content}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className={styles.careers}>
                <p className={styles.role_type}>Freelance</p>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Senior Front-end Developer
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{ }</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>
    )
}

export default Careers