import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const prefix = '/restoApp'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
        <div className={styles.callButton}>
        <Image src= {prefix + "/img/tel.png"} alt="" width="32" height="32" />
        </div>
        <div className={`${styles["texts"]} ${styles["whiten"]}`}>
        <div className={styles.texts}>ORDER NOW!</div>
        <div className={styles.texts}>077 2000 810</div>
        </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={`${styles["listItem"]} ${styles["hover-underline-animation"]}`}>Homepage</li>
            <li className={`${styles["listItem"]} ${styles["hover-underline-animation"]}`}>Products</li>
            <li className={`${styles["listItem"]} ${styles["logohover"]}`}>
            <Image src={prefix + "/img/log2.png"} alt="" width="96" height="96" />
            </li>
            <li className={`${styles["listItem"]} ${styles["hover-underline-animation"]}`}>Menu</li>  
            <li className={`${styles["listItem"]} ${styles["hover-underline-animation"]}`}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
          <Image src={prefix + "/img/cart2.png"} className={styles.cart1} alt="" width="36" height="36"/> 
          <div className={styles.counter}>5</div>
          </div>
        </div>
    </div>
  )
}
export default Navbar