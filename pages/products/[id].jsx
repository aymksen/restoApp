import React from "react";
import styles from "../../styles/product.module.css";
import Image from 'next/dist/client/image'

const pizza = {
  id: 1,
  img: "/img/mozza.png",
  name: "Viande hachee",
  price: [35.0, 40.0, 45.0],
  desc: "Best mexico desc",
};

function product() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgcontainer}>
        <Image  src={pizza.img} alt="" width="500" height="500" objectFit="contain"/>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default product;
