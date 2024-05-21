import React from "react";
import styles from "./Brand.module.scss";
import Brandimage from "../../About/sec/l2.png";

const Brand = () => {
  return (
    <div>
      <section className={styles.brand}>
        <div className={styles.brandContainer}>
          <img src={Brandimage} alt="" />
          <img src={Brandimage} alt="" />
          <img src={Brandimage} alt="" />
          <img src={Brandimage} alt="" />
          <img src={Brandimage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Brand;
