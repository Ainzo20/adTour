import React from "react";
import { FaMapMarkedAlt, FaGlobe, FaCalendarAlt, FaUtensils, FaClipboardCheck } from 'react-icons/fa';
import styles from "./menuBar.module.css";

const MenuBar: React.FC = () => {
  return (
    <div className={styles.menuBarContainer}>
      <ul className={styles.menuItems}>
        <li className={styles.item}>
          <a href="">
            <FaMapMarkedAlt className={styles.icon} />
            Destinations
          </a>
        </li>
        <li className={styles.item}>
          <a href="">
            <FaGlobe className={styles.icon} />
            Trips
          </a>
        </li>
        <li className={styles.item}>
          <a href="">
            <FaCalendarAlt className={styles.icon} />
            Events
          </a>
        </li>
        <li className={styles.item}>
          <a href="">
            <FaUtensils className={styles.icon} />
            Food
          </a>
        </li>
        <li className={styles.item}>
          <a href="">
            <FaClipboardCheck className={styles.icon} />
            Bookings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
