import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/navBar';
import Background from '../../components/BackgroundImage/backGroundImage';
import h from "../../assets/Login/cam.jpg";
import styles from "./HomePage.module.css";
import sites from "../../data/topsites.json";
import Card from '../../components/Card/card';

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  // Function to handle automatic sliding every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % Math.ceil(sites.length / itemsPerPage);
      });
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to get the current set of cards to display
  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sites.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Background image={h}>
          <NavBar />
        </Background>
      </div>
      {/* Card implementation */}
      <section className={styles.container}>
        <h2 className={styles.title}>Top sites</h2>
        <div className={styles.sitesContainer}>
          <div className={styles.sites}>
            {getCurrentItems().map((site) => (
              <Card
                key={site.id}
                imageUrl={site.imageUrl}
                name={site.name}
                description={site.description}
                onClick={() => {
                  console.log(`${site.name} card clicked!`);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
