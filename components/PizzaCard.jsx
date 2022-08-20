import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from 'next/dist/client/image'
function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image  src="/img/mozza.png" alt="" width="500" height="500" objectFit="contain"/>
      <h1 className={styles.title}>Viande Hachee</h1>
      <span className={styles.price}>35.00 DH</span>
      <p className={styles.desc}>Lorem Ipsum is simply dummy text</p>
    </div>
  )
}

export default PizzaCard