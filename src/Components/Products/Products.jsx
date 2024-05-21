import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import Button from "../Buttons/Button";
import axios from "axios";

const Products = ({  loading }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("https://664c587c35bbda10987ff83d.mockapi.io/Basket")
      .then((res) => {
        setData(res.data);
      })
  };

  useEffect(() => {
    getData();
  }, []);

  const addToBasket = (item) => {
    axios.post('http://localhost:3003/shop',item)
    
}

  return (
    <div>
      <section className={styles.ProductsSec}>
        <div className={styles.containerProducts}>
          <div className={styles.containerProductsTitlle}>
            <h1>Featured Products to Show</h1>
            <p>Discover our exclusive collection of products.</p>
          </div>
          <div className={styles.containerProductsRobots}>
            {data.map((item) => (
              <div key={item.id} className={styles.robotCard}>
                <img src={item.image} alt={item.image} />
                <h2>{item.title}</h2>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <Button
                  text="Add to Cart"
                  onClick={() => addToBasket(item)}
                  loading={loading}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
