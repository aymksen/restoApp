import Head from 'next/head'
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css'
import Featured from './../components/Featured';



export default function Home() {
  return (
    <div className={styles.container}>
       
      <Head>
        <title>Ô&apos;Mexico</title>
        <meta name="description" content="The Best Tacos in the universe " />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon8.png`} />
        <link rel="icon" href="/favicon8.png" />
      </Head>
        <Featured />
        <PizzaList/>
    </div>
  )
}
