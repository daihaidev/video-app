import Grid from '../Common/Grid'
import ContactFrom from './ContactForm'
import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const Contact = () => {
    const we = "We are creative technologists"
    const paragraphOne = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    const paragraphTwo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    return (
        <>
            <Grid>
                <div className={styles.some}>
                    <ContactFrom />
                </div>
                <div className={styles.some}>
                    <img src="https://dummyimage.com/500x650/000/fff" />
                </div>
            </Grid>
        </>
    )
}

export default Contact