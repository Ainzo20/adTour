import React, { useState, useEffect } from 'react';
import styles from './navBar.module.css';

const NavBar: React.FC = () => {
  // State to keep track of whether the navbar should be darkened
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events and update the state
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Darken navbar when scrolled down
    } else {
      setIsScrolled(false); // Revert to transparent when at the top
    }
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}><a className={styles.navbarItem} href="/">AdTrip</a></div>
      <div className={styles.navbarItem}>Home</div>
      <div className={styles.navbarItem}>About</div>
      <div className={styles.navbarItem}>Contact</div>
    </nav>
  );
};

export default NavBar;
