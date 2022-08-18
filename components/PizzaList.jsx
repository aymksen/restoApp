import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

function PizzaList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title} >BEST TACOS IN THE CITY</h1>
        <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
    </div>
    
    
    </div>
  )
}

export default PizzaList