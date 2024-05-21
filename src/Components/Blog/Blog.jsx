import React from "react";
import styles from "./Blog.module.scss";
import bg from "../../About/sec/b1.jpg";
import bg2 from "../../About/sec/b2.jpg";

const Blog = () => {
  return (
    <div>
      <section className={styles.blog}>
        <div className={styles.blogContainer}>
          <div className={styles.blogContainerTop}>
            <h1>Latest News from our Blog</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className={styles.blogContainerBottom}>
            <div className={styles.blogContainerBottomCard}>
              <img src={bg} alt="" />
              <div
                className={styles.blogBtn}
                style={{ display: "flex", gap: "10px" }}
              >
                <button>Travel</button>
                <button>Life Style</button>
              </div>
              <h1>Portable latest Fashion for young women</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <span>31st January, 2018</span>
            </div>
            <div className={styles.blogContainerBottomCard}>
              <img src={bg2} alt="" />
              <div
                className={styles.blogBtn}
                style={{ display: "flex", gap: "10px" }}
              >
                <button>Travel</button>
                <button>Life Style</button>
              </div>
              <h1>Portable latest Fashion for young women</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <span>31st January, 2018</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
