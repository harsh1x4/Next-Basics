import styles from '../../styles/navbar.module.css'
// import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [classActive, setClassActive] = useState(``)

    const toggleNav = () => {
        if (open === false) {
            setClassActive(`${styles.active}`),
                setOpen(true),
                console.log(open)
        }

        if (open === true) {
            setClassActive(``),
                setOpen(false),
                console.log(open)
        }
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.nav_logo}>
                    {/* <span className={styles.logo}>
                        <Image src="/favicon.ico" alt="Vercel Logo" width={72} height={16} />
                    </span> */}
                    <span>Responsive Navbar</span>
                </div>
                <div onClick={toggleNav} className={`${styles.toggle_button} ${classActive}`} >
                    <button className={styles.more_button} aria_label="Menu Button">
                        <div className={styles.menu_icon_wrapper}>
                            <div className={`${styles.menu_icon_line} ${styles.half} ${styles.first}`}></div>
                            <div className={styles.menu_icon_line}></div>
                            <div className={`${styles.menu_icon_line} ${styles.half} ${styles.last}`}></div>
                        </div>
                    </button>
                </div>
                <ul className={`${styles.links} ${classActive}`}>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" legacyBehavior>
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/404" legacyBehavior>
                            <a>404</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;