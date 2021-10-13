import { Row, Col } from 'react-bootstrap'
import SectionTitle from '../Common/SectionTitle'
import Grid from '../Common/Grid'
import ArrowLink from '../Common/ArrowLink'
import styles from '../../styles/Home.module.scss'

const SelectedWork = () => {
    const client = "Marks & Spencer"
    const project = "Summer '21 Collection Experience Campaign"
    const summary = "For the staple British retailer, March was a time in which Marks & Spencer was gearing up for the release of their Summer clothing collection and they wanted to create a celebratory preview campaign where we were asked to help a complete digital experience"

    return (
        <>
            <SectionTitle title="Selected Work" />
            <Grid>
                <img src='https://res.cloudinary.com/du9qcctlw/image/upload/v1624219970/techtee-website/articles/forbes_under_30.png' />
                <div>
                    <p className={styles.selected_client}>{client}</p>
                    <p className={styles.selected_project}>{project}</p>
                    <p className={styles.selected_summary}>{summary}</p>
                    <ArrowLink />
                </div>
            </Grid>
        </>
    )
}

export default SelectedWork