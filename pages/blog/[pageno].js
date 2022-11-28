import Navbar from '../components/Navbar.js'
import styles from '../../styles/blogIndex.module.css'
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curElem) => {
        return {
            params: {
                pageno: curElem.id.toString(),
            },
        };
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    }
}


const fetchedData = ({ data }) => {
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.card} key={data.id}>
                    <h3>{data.id}</h3>
                    <div className={styles.blog_info}>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default fetchedData;