import React from "react";
import styles from "../../styles/product.module.css";
import Image from "next/dist/client/image";
import { useState } from "react";


const pizza = {
  id: 1,
  img: ["/img/mozza6.png", "/img/mozza10.png", "/img/mozza20.png",""],
  name: "Viande hachee",
  price: [35.0, 45.0,55.0],
  // priced1: ["Simple"],
  // priced2: ["🥤 Menu 🍟"],
  priced1: ["6 pcs"],
  priced2: ["10 pcs"],
  priced3: ["20 pcs"],
  desc: "Best mexico desc",
};

function product() {
  const [size, setSize] = useState(0);
  const [menu, setMenu] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgcontainer}>
          <Image
            src={pizza.img[menu]}
            alt=""
            width="500"
            height="500"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]} DH</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the Menu</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setMenu(0) & setSize(0)}>
            {pizza.priced1}
          </div>
          <div className={styles.size} onClick={() => setMenu(1) & setSize(1)}>
            {pizza.priced2}
          </div>
          <div id="if" className={styles.size} onClick={() => setMenu(2) & setSize(2)}>
            {pizza.priced3}
          </div>
        </div>
        <h3 className={styles.choose}>Choose the Sauce</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="Algerienne"
              name="Algerienne"
              className={styles.checkbox}
            >
            </input>
            <label htmlFor="Algerienne">Algérienne</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="Biggy"
              name="Biggy"
              className={styles.checkbox}
            >
            </input>
            <label htmlFor="Biggy">Biggy</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="Andalouse"
              name="Andalouse"
              className={styles.checkbox}
            >
            </input>
            <label htmlFor="Andalouse">Andalouse</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="Samourai"
              name="Samourai"
              className={styles.checkbox}
            >
            </input>
            <label htmlFor="Samourai">Samourai</label>
          </div>
        </div>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}></input>
            <button className={styles.button}>Add to cart</button>
          </div>

      </div>
    </div>
  );
}

export default product;
