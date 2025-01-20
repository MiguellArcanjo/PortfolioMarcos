import Image from "next/image";
import styles from "./nav.module.css"

export function Nav() {
    return (
        <nav className={styles.nav}>
          <Image src="/Logo.svg" alt="logo" width={250} height={250}/>
          <div className={styles.navLinks}>
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="/about">About</a>
            <a href="">Contact</a>
          </div>
        </nav>
    )
}