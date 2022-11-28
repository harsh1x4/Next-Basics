import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'

const blogNo = () => {
    const router = useRouter();
    const blogNumber = router.query.blogNo;
    return (
        <>
            <h1 className={styles.title}>Welcome to {blogNumber}</h1>
        </>
    )
}

export default blogNo