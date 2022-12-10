import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className='bg-orange-100 text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
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
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/* Skills */}
      {/* <section id='skills' className='snap-start'>
        <Skills/>
      </section> */}

      {/* Experience */}
      <section id='exp' className='snap-center'>
        <Experience/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>

      {/* replace this with go up icon */}
      <Link href={'#banner'}>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex flex-row items-center justify-center text-gray-500 space-x-2'>
            <ChevronUpIcon className="h-7 w-7"/>
            <p className='font-light'> Back to top</p>
          </div>
        </footer>
      </Link>
      
    </div>
  )
}
