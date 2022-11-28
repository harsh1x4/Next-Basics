import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'

const blogNo = () => {
    const useRouting = useRouter();
    const blogNumber = useRouting.query.blogNo;
    return (
        <>
            <h1 className={styles.title}>Welcome to {blogNumber}</h1>
        </>
    )
}

export default blogNo