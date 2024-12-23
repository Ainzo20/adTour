import React from 'react';
import styles from "./navBar.module.css";

const NavBar:React.FC=()=>{
    return(
        <>
        <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>AdTrip</p>
            </div>
            <div className={styles.navelementsContainer}>
                <ul className={styles.navElements}>
                    <li><a href="Map">Map</a></li>
                    <li><a href="Sites">Sites</a></li>
                    <li><a href="Events">Events</a></li>
                    <li><a href="#Contact">Contact us</a></li>
                </ul>
            </div>
        </nav>
        </header>

        <footer className={styles.footer}>

        </footer>
        </>
    );
}
export default NavBar;