import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar.js'
const about = () => {
    return (
        <>
        <Navbar/>
            <div className={styles.centerDiv}>
                <center><h1>About</h1></center>
                <a className={styles.card}>
                    <center><h2>About</h2></center>
                    <p>An excellent About page not only narrates your story, values, and gives an inside look into how your business came to be, but it also helps sell. When prospects learn your story and connect with it, they’re likely to buy from you. A well-planned About Us page can do all this!</p>
                </a>
            </div>
        </>
    )
}

export default about