import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "./Bascet.module.scss";
import axios from "axios";

const Bascet = () => {
    const [data , setData] = useState([])

    const getData = () => {
        axios.get('http://localhost:3003/shop')
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    },[])

  return (
    <div>
      <Header />
      <section className={styles.bascet}>
        <div className={styles.bascetContainer}>
          <marquee behavior="" direction="">
            Bascetdeki Mehsullar{" "}
          </marquee>
        </div>
      </section>
    </div>
  );
};

export default Bascet;
