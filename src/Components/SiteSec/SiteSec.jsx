import React from "react";
import styles from "./SiteSec.module.scss";
import aboutImage from "../../About/Image/about-img.png";

const SiteSec = () => {
  return (
    <div>
      <section className={styles.siteSec}>
        <div className={styles.siteSecContainer}>
          <div className={styles.siteSecContainerImg}>
            <img src={aboutImage} alt="" />
          </div>
          <div className={styles.siteSecContainerDesk}>
            <h1>Globally Connected by Large Network</h1>
            <span>We are here to listen from you deliver exellence</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor.
            </p>
            <button>GET DETAILS</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteSec;
