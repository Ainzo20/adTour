import React from 'react';
import styles from './card.module.css';

interface CardProps {
  imageUrl: string;
  name: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  name,
  description,
  onClick,
}) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.image}
        />
      </div>

      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
