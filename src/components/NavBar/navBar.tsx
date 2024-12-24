import React from 'react';
import styles from './navBar.module.css';


const NavBar: React.FC = () => {
  return (
    <>{/* Fixed Navbar */}
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}><a className={styles.navbarItem}href="/">AdTrip</a></div>
      <div className={styles.navbarItem}>Home</div>
      <div className={styles.navbarItem}>About</div>
      <div className={styles.navbarItem}>Contact</div>
    </nav>
    </>
  );
};

export default NavBar;
