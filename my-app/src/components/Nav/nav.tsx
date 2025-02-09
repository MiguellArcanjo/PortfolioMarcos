import Image from "next/image";
import styles from "./nav.module.css";

export function Nav() {
    return (
        <nav className={styles.nav}>
            <Image src="/logoNova.svg" alt="logo" width={110} height={110} className={styles.logo} />
            <div className={styles.navLinks}>
                <a href="/" className={styles.link}>Home</a>
                <a href="/myProjects" className={styles.link}>Projects</a>
                <a href="/about" className={styles.link}>About</a>
                <a href="/contact" className={styles.link}>Contact</a>
            </div>
        </nav>
    );
}
