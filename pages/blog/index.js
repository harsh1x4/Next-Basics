// import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import styles from '../../styles/blogIndex.module.css'
import Navbar from '../components/Navbar.js'

const blog = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Blog</a>
        </h1>
        <div style={{ "text-align": "center", "display": "flex", "justify-content": "center" }}>
          <div className={styles.grid}>
            <a className={styles.card}>
              <Image src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={300} width={500} alt="blog3"></Image>
            </a>
            <a className={styles.card}>
              <Image src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={300} width={500} alt="blog4"></Image>
            </a>
            <a className={styles.card}>
              <Image src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={300} width={500} alt="blog3"></Image>
            </a>
            <a className={styles.card}>
              <Image src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={300} width={500} alt="blog4"></Image>
            </a>
            <a className={styles.card}>
              <Image src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={300} width={500} alt="blog3"></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;

// http://localhost:3000/blog