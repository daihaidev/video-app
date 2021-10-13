import Grid from '../Common/Grid'
import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/Contact.module.scss'

const Offices = () => {
    const we = "We are creative technologists"

    return (
        <>
            <SectionTitle title="Offices" />
            <Grid>
                <div className={styles.some}>
                    <p className={`${styles.city} ${styles.heading_font}`}>London</p>
                    <p className={`${styles.telephone} ${styles.heading_font}`}>+442071268171</p>
                    <p className={styles.address}>180 Strand, Temple,<br />London, WC2R 1EA, United Kingdom</p>
                    <img src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624219970/techtee-website/articles/forbes_under_30.png" />
                </div>
                <div className={styles.some}>
                    <p className={`${styles.city} ${styles.heading_font}`}>New York</p>
                    <p className={`${styles.telephone} ${styles.heading_font}`}>Coming 2022!</p>
                    <p className={styles.address}>180 Strand, Temple,<br />London, WC2R 1EA, United Kingdom</p>
                    <img src="https://res.cloudinary.com/du9qcctlw/image/upload/v1624219970/techtee-website/articles/forbes_under_30.png" />
                </div>
            </Grid>
        </>
    )
}

export default Offices