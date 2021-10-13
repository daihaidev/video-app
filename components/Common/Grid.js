import styles from '../../styles/Common.module.scss'

const Grid = ({ children }) => {

    return (
        <>
            <div className={styles.grid_wrapper}>
                <div className={styles.grid_inner}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Grid