import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../About/Image/logo (16).png";

const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.containerHeader}>
          <div className={styles.containerHeaderLogo}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.containerHeaderNavbar}>
            <nav>
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/shop">ABOUT US</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">PRODUCTS</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CONTACT</a></li>
                <li><a href="">DROPDOWN</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
