//1. import area
import Head from 'next/head'
import Footer from '../components/Footer';
import Section from '../components/Section';
import Aside from '../components/Aside';
import Header from '../components/Header';
// import styles from '../styles/Home.module.css'

//2.functional defination
 function Home() {
  return (
    < >
      <Head>
        <title>Welcome to my first nextjs application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header/>

      <main >
     <Aside/>
    <Section/> 
      </main>

     <Footer/>
    </>
  )
}

//3.export area
export default Home;