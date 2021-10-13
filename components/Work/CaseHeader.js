import Grid from '../Common/Grid'
import styles from '../../styles/Work.module.scss'

const CaseHeader = ({ client, imageUrl, project, categories, slug, live }) => {
    const styling = {
        backgroundImage: 'url(' + imageUrl + ')'
    };

    return (
        <>
            <div className={styles.case_header}>
                <Grid>
                    <div className={styles.case_header_title}>
                        <div><p style={styling}>{client}</p></div>
                    </div>
                    <div className={styles.case_header_details}>
                        <p className={styles.case_project}>{project}</p>
                        <div className={styles.categories}>
                            {categories.map((category, i) => (
                                <p key={i}>{category}</p>
                            ))}
                        </div>
                        <a href={`${slug}`}>
                            <p>{live} &rarr;</p>
                        </a>
                    </div>
                </Grid>
            </div>
            <div className={styles.small_spacer} />
        </>
    )
}
export default CaseHeader;
