import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar.js'

const contact = () => {
    return (
        <>
        <Navbar/>
            <div className={styles.centerDiv}>
                <center><h1>Contact</h1></center>
                <a className={styles.card}>
                    <center><h2>Contact</h2></center>
                    <p>The contact us page also includes a physical address, email address, and links to their social media profiles.</p>
                </a>
            </div>
        </>
    );
};

export default contact;