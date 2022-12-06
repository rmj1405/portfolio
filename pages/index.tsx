import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-orange-100 text-black h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Ritika Manish Joshi</title> 
      </Head>

      {/* Header */}
      <Header/>

      {/* Banner */}
      <section id='banner' className='snap-start'>
        <Banner/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      {/* Projects */}
      {/* Skills */}
      {/* Experience */}
      <section id='exp' className='snap-center'>
        <Experience/>
      </section>
      
    </div>
  )
}
