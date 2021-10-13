import styles from "../../styles/Home.module.scss"

const ClientLogo = ({ alt, src }) => {

    return (
        <div className={styles.client_grid}>
            <img src={src} alt={alt} />
        </div>
    )
};

export default ClientLogo