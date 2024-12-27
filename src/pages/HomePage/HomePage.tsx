import React from "react";
import NavBar from "../../components/NavBar/navBar";
import Background from "../../components/BackgroundImage/backGroundImage";
import h from "../../assets/Login/cam.jpg";
import styles from "./HomePage.module.css";
import sites from "../../data/topsites.json";
import Card from "../../components/Card/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MenuBar from "../../components/MenuBar/menuBar";

const HomePage: React.FC = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 300, // Transition speed
    slidesToShow:4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when clicking next/prev
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
        <section className={styles.menuBar}>
          <MenuBar/>
        </section>
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Top sites</h2>
      </div>
      <section className={styles.section}>
        <Slider {...settings}className={styles.Slider} >
          {sites.map((site, index) => (
            <div key={index} className={styles.cardWrapper}>
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
        </Slider>
      </section>
    </>
  );
};

export default HomePage;
