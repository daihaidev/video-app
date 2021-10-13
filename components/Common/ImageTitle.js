import styles from '../../styles/Common.module.scss'

const ImageTitle = ({ title, imageUrl }) => {
    const styling = {
        backgroundImage: 'url(' + imageUrl + ')'
    };

    return (
        <>
            <div className={styles.image_title_container} style={styling}>
                <div><p style={styling}>{title}</p></div>
            </div>
            <div className={styles.medium_spacer} />
        </>
    )
}

export default ImageTitle