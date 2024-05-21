import React from "react";
import styles from "./Features.module.scss";
import { CiUser } from "react-icons/ci";

const Features = () => {
  return (
    <div>
      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresTitle}>
            <h1>Some Features that Made us Unique</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className={styles.featuresCards}>
            <div className={styles.featuresCard}>
              <div>
                <CiUser />
                Expert Technicians
              </div>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
            <div className={styles.featuresCard}>
              <div>
                <CiUser />
                Expert Technicians
              </div>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
            <div className={styles.featuresCard}>
              <div>
                <CiUser />
                Expert Technicians
              </div>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
            <div className={styles.featuresCard}>
              <div>
                <CiUser />
                Expert Technicians
              </div>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
            <div className={styles.featuresCard}>
              <div>
                <CiUser />
                Expert Technicians
              </div>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
            <div className={styles.featuresCard}>
              <div>
                <CiUser />
                Expert Technicians
              </div>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
