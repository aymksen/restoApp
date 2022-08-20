import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from 'next/dist/client/image'
const prefix = '/restoApp'

function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src={prefix + "/img/log2.png"} alt="" width="500" height="500"/>
      
    </div>
  )
}

export default PizzaCard