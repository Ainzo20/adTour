import React from 'react';
import styles from './backGroundImage.module.css';

interface BackgroundProps {
  image: string;
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ image, children }) => {
  return (
    <div className={styles.backgroundWrapper}>
      <img
        className={styles.background}
        src={image}
        alt="Background"
      />
      {children}
    </div>
  );
};

export default Background;
