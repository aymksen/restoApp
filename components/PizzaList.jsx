import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

function PizzaList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title} >Tacos 🌯 ? C&apos;est notre Spécialité 👨‍🍳</h1>
        <p className={styles.desc}>Vous pourrez créer votre propre large choix Chez 👑 Ô&apos;Mexico🔱 🤍
Alors vous choisissez quoi ?🤔</p>
    <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
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