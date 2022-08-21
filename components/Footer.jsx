import styles from "../styles/Footer.module.css";
import Image from 'next/dist/client/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.title}>📍 Où Trouver Nous</h2>
          <p className={styles.text}>
            🍕 Ô'mexico
            <br />
            🍔 Av. Jamila Bouhrid
            <br />
            🍟 24000 El Jadida
          </p>
        </div>
        <div className={styles.item}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3336.7405834530173!2d-8.509899!3d33.247099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda91d3d8d2cf40b%3A0xf289f1cc823da5aa!2sO%20Mexico!5e0!3m2!1sen!2sma!4v1661031655653!5m2!1sen!2sma" allowfullscreen="" loading="lazy"
            width="500"
            height="500"
            frameborder="0"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
        <div className={styles.card}>

          
          <Image className={styles.img}  src="/img/featured1.jpg" alt="" width="400" height="400" layout="fixed" />
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>⏲ Heures D'ouverture</h2>
          <p className={styles.text} >
          Lundi <span >11AM–1AM </span>
            <br />Mardi <span>11AM–1AM </span>
            <br />Mercredi <span>11AM–1AM </span>
            <br />Jeudi <span>11AM–1AM </span>
            <br />Vendredi <span>11AM–1AM</span>
            <br />Samedi <span>11AM–1AM</span>
            <br />Dimanche<span> 11AM–1AM</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
