import styles from "../styles/Featured.module.css"
import Image from "next/image"
import { useState } from "react";

const prefix = '/restoApp'
function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured6.png",
    "/img/featured.jpg",
    "/img/featured1.jpg",
];
const handleArrow = (direction) => {
  if(direction =="l"){
    setIndex(index !== 0 ? index-1 : 2)
  }
  if(direction =="r"){
    setIndex(index !== 2 ? index+1 : 0)
  }
  
}
// console.log(index);
  return (

    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left:0}} objectFit="contain" onClick={()=>handleArrow("l")}>
        <Image src={prefix + "/img/arrowl.png"} alt="" layout='fill'/>
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        
          {images.map((img, i)=>(
            <div className={styles.imgContainer} key={i}>
            <Image src={prefix + img}  alt="" layout='fill' objectFit="contain"/>
            </div>
          ))}
            
  
        
        </div>
        <div className={styles.arrowContainer} style={{right:0}} objectFit="contain" onClick={()=>handleArrow("r")}>
        <Image src={prefix + "/img/arrowr.png"} alt="" layout='fill'/>
        </div>
    </div>
  )
}

export default Featured