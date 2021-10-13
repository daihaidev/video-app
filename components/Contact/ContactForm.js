import Grid from '../Common/Grid'
import ContactFrom from './ContactForm'
import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const ContactForm = () => {

    return (
        <> 
        <Grid>
            <div>
                {/* hoc add your code here */}
                hello
            </div>
            <div>
                <p className={styles.heading_font}>hello@techtee.co</p>
            </div>
        </Grid>
        </>
    )
}

export default ContactForm