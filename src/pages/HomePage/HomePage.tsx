import React, { useState } from "react";
import NavBar from "../../components/NavBar/navBar";
import Background from "../../components/BackgroundImage/backGroundImage";
import h from "../../assets/Login/cam.jpg";
import styles from "./HomePage.module.css";
import sites from "../../data/topsites.json";
import Card from "../../components/Card/card";

const HomePage: React.FC = () => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // circular slider
  const getVisibleSites = () => {
    const extendedSites = [...sites, ...sites]; //Duplicate of sites for looping
    const startIndex = currentIndex;
    return extendedSites.slice(startIndex, startIndex + itemsPerPage);
  };

  const visibleSites = getVisibleSites();

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sites.length);
        setIsAnimating(false);
      }, 500); // Match CSS animation duration
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + sites.length) % sites.length // Handle negative index
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.NavBarContainer}>
          <NavBar />
        </div>
        <div className={styles.backgroundImageContainer}>
          <Background image={h} />
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Top Destinations</h2>
      </div>
      <section
        className={`${styles.sitesContainer} ${
          isAnimating ? styles.animate : ""
        }`}
      >
        {visibleSites.map((site, index) => (
          <div
            key={index} /* Unique index for seamless looping */
            className={styles.cardWrapper}
          >
            <Card
              imageUrl={site.imageUrl}
              name={site.name}
              description={site.description}
              onClick={() => {
                console.log(`Clicked on ${site.name}`);
              }}
            />
          </div>
        ))}
      </section>
      <div className={styles.navigationContainer}>
        <button className={styles.navButton} onClick={handlePrev}>
          
        </button>
        <button className={styles.navButton} onClick={handleNext}>
          
        </button>
      </div>
    </>
  );
};

export default HomePage;
