import styles from '../../styles/Common.module.scss'

const ArrowLink = ({ title }) => {

    return (
        <>
            <div className={styles.full_link}>
                <p>{title} &rarr;</p>
            </div>
        </>
    )
}

export default ArrowLink