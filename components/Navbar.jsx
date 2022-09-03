import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
        <div className={styles.callButton}>
        <Image src="/img/tel.png" alt="" width="32" height="32" />
        </div>
        <div className={`${styles["texts"]}`}>
        <div className={styles.texts}>ORDER NOW!</div>
        <div className={styles.texts}>077 2000 810</div>
        </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={`${styles["listItem"]}`}>Homepage</li>
            <li className={`${styles["listItem"]}`}>Products</li>
            <li className={`${styles["listItem"]}`}>
            <Image className={styles.img} src="/img/log1.png" alt="" width="60" height="60" />
            </li>
            <li className={`${styles["listItem"]}`}>Menu</li>  
            <li className={`${styles["listItem"]}`}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
          <Image src="/img/cart1.png" className={styles.cart1} alt="" width="30" height="30"/> 
          <div className={styles.counter}>5</div>
          </div>
        </div>
    </div>
  )
}
export default Navbar