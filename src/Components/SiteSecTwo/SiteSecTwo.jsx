import React from 'react'
import styles from ".//SiteSecTwo.module.scss";
import aboutImageTwo from "../../About/Image/video-bg (1).jpg";

const SiteSecTwo = () => {
  return (
    <div>
        <section className={styles.siteSecTwo}>
        <div className={styles.siteSecContainerTwo}>
          <div className={styles.siteSecContainerDeskTwo}>
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
          <div className={styles.siteSecContainerImgTwo}>
            <img src={aboutImageTwo} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SiteSecTwo