import Grid from '../Common/Grid'
import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import styles from '../../styles/About.module.scss'

const Founder = () => {
    const we = "We are creative technologists"
    const paragraphOne = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    const paragraphTwo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    return (
        <>
            <SectionTitle title="Founder" />
            <Grid>
                <div className={styles.some}>
                    <img src="https://res.cloudinary.com/du9qcctlw/image/upload/v1625905705/test.jpg" />
                </div>
                <div className={styles.some}>
                    <p className={styles.heading_font}>Tobi Ajala</p>
                    <p className={styles.paragraph}>Founder and CEO</p>
                    <p className={styles.paragraph}>{paragraphOne}</p>
                    <p className={styles.paragraph}>{paragraphTwo}</p>
                </div>
            </Grid>
        </>
    )
}

export default Founder