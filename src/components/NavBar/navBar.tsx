import React from 'react';
import styles from './navBar.module.css';
import h from "../../assets/Login/cam.jpg";
import Background from '../BackgroundImage/backGroundImage';

const NavBar: React.FC = () => {
  return (
    <>{/* Fixed Navbar */}
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}><a className={styles.navbarItem}href="/">AdTrip</a></div>
      <div className={styles.navbarItem}>Home</div>
      <div className={styles.navbarItem}>About</div>
      <div className={styles.navbarItem}>Contact</div>
    </nav>

    {/* Main Content */}
    <div className={styles.content}>
      <h1>Static Background with Navbar</h1>
      <p>This is a sample page with a static background image set in the TSX file.</p>
    </div></>
  );
};

export default NavBar;
