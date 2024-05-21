import React from "react";
import styles from "./Footer.module.scss";
import igFeed from "../../About/sec/i4.jpg";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerContainerTop}>
            <div className={styles.footerProducts}>
              <h3>Top Products</h3>
              <nav>
                <ul>
                  <li>
                    <a href="">Managed Website</a>
                  </li>
                  <li>
                    <a href="">Manage Reputation</a>
                  </li>
                  <li>
                    <a href="">Power Tools</a>
                  </li>
                  <li>
                    <a href="">Marketing Service</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className={styles.footerNewsletter}
              style={{ display: "flex", gap: "15px", flexDirection: "column" }}
            >
              <h3>Newsletter</h3>
              <p>
                You can trust us. we only send promo offers, not a single spam.
              </p>
              <div
                className={styles.nwwİnnput}
                style={{ display: "flex", gap: "15px" }}
              >
                <input type="text" placeholder="Enter Email" />
                <button className={styles.button}>SUBSCRİBE</button>
              </div>
            </div>
            <div className={styles.footerFeed}>
              <h3>Instragram Feed</h3>
              <div className={styles.footerFeedIg}>
                <img src={igFeed} alt=""  className={styles.FeedIg}/>
                <img src={igFeed} alt="" className={styles.FeedIg}/>
                <img src={igFeed} alt="" className={styles.FeedIg}/>
                <img src={igFeed} alt="" className={styles.FeedIg}/>
                <img src={igFeed} alt="" className={styles.FeedIg}/>
                <img src={igFeed} alt="" className={styles.FeedIg}/>
                <img src={igFeed} alt="" className={styles.FeedIg}/>
                <img src={igFeed} alt="" className={styles.FeedIg}/>
              </div>
            </div>
          </div>
          <div className={styles.footerContainerBottom}>
            <p>
              Copyright ©2024 All rights reserved | This template is made with
              by  ♡ Colorlib
            </p>

            <div className={styles.footerBottomSocial}>
              <FaFacebookF />
              <FaFacebookF />
              <FaFacebookF />
              <FaFacebookF />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
