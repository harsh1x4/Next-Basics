import styles from '../../styles/navbar.module.css'
// import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.nav_logo}>
                    {/* <span className={styles.logo}>
                        <Image src="/favicon.ico" alt="Vercel Logo" width={72} height={16} />
                    </span> */}
                    <span>Navbar</span>
                </div>
                <div className={styles.toggle_button}>
                    <button className={styles.more_button} aria_label="Menu Button">
                        <div className={styles.menu_icon_wrapper}>
                            {/* <div className="menu_icon_line half first"></div>
                            <div className="menu_icon_line"></div>
                            <div className="menu_icon_line half last"></div> */}
                            <div className={`${styles.menu_icon_line} ${styles.half} ${styles.first}`}></div>
                            <div className={styles.menu_icon_line}></div>
                            <div className={`${styles.menu_icon_line} ${styles.half} ${styles.last}`}></div>
                        </div>
                    </button>
                </div>
                <ul className={styles.links}>

                    <li>
                        <Link href="/home" legacyBehavior>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/404" legacyBehavior>
                            <a>404</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;