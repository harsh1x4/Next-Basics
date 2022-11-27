import styles from '../../styles/navbar.module.css'
const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.nav_logo}>
                    <span>Responsive Navbar</span>
                </div>
                <div className={styles.toggle_button}>
                    <button className={styles.more_button} aria_label="Menu Button">
                        <div className={styles.menu_icon_wrapper}>
                            {/* <div className="menu_icon_line half first"></div>
                            <div className="menu_icon_line"></div>
                            <div className="menu_icon_line half last"></div> */}
                            {/* <div className={`${styles.menu_icon_line}, ${styles.half}, ${styles.first}`}></div> */}
                            <div className={styles.menu_icon_line}></div>
                            <div className={styles.menu_icon_line}></div>
                            <div className={styles.menu_icon_line}></div>
                            {/* <div className={`${styles.menu_icon_line}, ${styles.half}, ${styles.last}`}></div> */}
                        </div>
                    </button>
                </div>
                <ul className={styles.links}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;