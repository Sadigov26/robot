import React from "react";
import styles from "./Hero.module.scss";
import bannerImg from "../../About/Image/banner-img.png";

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContainerDesk}>
            <h1>
              Improved
              <br />
              Production level
              <br />
              with Robotics
            </h1>
            <p>Everyone wants the innovation through robotics</p>
            <button>View Details</button>
          </div>
          <div className={styles.heroContainerImage}>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
