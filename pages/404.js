import styles from '../styles/404.module.css'
const ErrorPage = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.main_text} title="404">404</div>
                <p>Page Not Found</p>
            </div>
        </>
    )
}

export default ErrorPage;