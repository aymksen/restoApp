import React from 'react'
import Image from 'next/dist/client/image'
import styles from "../styles/Cart.module.css"

function Cart() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/mozza.png" layout='fill' alt="" objectfit='cover' />
                        </div>
                    </td>
                    <td> 
                        <span className={styles.name}>Tacos Kefta</span>
                    </td>
                    <td> 
                    <span className={styles.extras}>
                        Double ingredients, spicy sauce
                    </span>
                    </td>
                    <td> 
                    <span className={styles.price}>
                        99 DH
                    </span>
                    </td>
                    <td> 
                    <span className={styles.quantity}>
                        2 pcs
                    </span>
                    </td>
                    <td> 
                    <span className={styles.total}>
                        108 DH
                    </span>
                    </td>

                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/mozza.png" layout='fill' alt="" objectfit='cover' />
                        </div>
                    </td>
                    <td> 
                        <span className={styles.name}>Tacos Kefta</span>
                    </td>
                    <td> 
                    <span className={styles.extras}>
                        Double ingredients, spicy sauce
                    </span>
                    </td>
                    <td> 
                    <span className={styles.price}>
                        99 DH
                    </span>
                    </td>
                    <td> 
                    <span className={styles.quantity}>
                        2 pcs
                    </span>
                    </td>
                    <td> 
                    <span className={styles.total}>
                        108 DH
                    </span>
                    </td>

                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/mozza.png" layout='fill' alt="" objectfit='cover' />
                        </div>
                    </td>
                    <td> 
                        <span className={styles.name}>Tacos Kefta</span>
                    </td>
                    <td> 
                    <span className={styles.extras}>
                        Double ingredients, spicy sauce
                    </span>
                    </td>
                    <td> 
                    <span className={styles.price}>
                        99 DH
                    </span>
                    </td>
                    <td> 
                    <span className={styles.quantity}>
                        2 pcs
                    </span>
                    </td>
                    <td> 
                    <span className={styles.total}>
                        108 DH
                    </span>
                    </td>

                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/mozza.png" layout='fill' alt="" objectfit='cover' />
                        </div>
                    </td>
                    <td> 
                        <span className={styles.name}>Tacos Kefta</span>
                    </td>
                    <td> 
                    <span className={styles.extras}>
                        Double ingredients, spicy sauce
                    </span>
                    </td>
                    <td> 
                    <span className={styles.price}>
                        99 DH
                    </span>
                    </td>
                    <td> 
                    <span className={styles.quantity}>
                        2 pcs
                    </span>
                    </td>
                    <td> 
                    <span className={styles.total}>
                        108 DH
                    </span>
                    </td>

                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/mozza.png" layout='fill' alt="" objectfit='cover' />
                        </div>
                    </td>
                    <td> 
                        <span className={styles.name}>Tacos Kefta</span>
                    </td>
                    <td> 
                    <span className={styles.extras}>
                        Double ingredients, spicy sauce
                    </span>
                    </td>
                    <td> 
                    <span className={styles.price}>
                        99 DH
                    </span>
                    </td>
                    <td> 
                    <span className={styles.quantity}>
                        2 pcs
                    </span>
                    </td>
                    <td> 
                    <span className={styles.total}>
                        108 DH
                    </span>
                    </td>

                </tr>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal: </b>108 DH
                </div>
                <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount: </b>0 DH
                </div>
                <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total: </b>108 DH
                </div>
                <button className={styles.button}>Check Out </button>
            </div>
        </div>
    </div>
  )
}

export default Cart