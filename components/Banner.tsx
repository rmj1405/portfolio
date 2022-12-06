import React from 'react'
import Image from 'next/image'
import mypic from '../assets/ss.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

function Banner({}: Props) {
    const [text, count] = useTypewriter({
        words: ["<RitikaWrites/>", "Hey, it's Ritika!"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
      text-center overflow-hidden'>
        <BackgroundCircles />
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={mypic}
        alt="Image of Me"
        />

        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-4 tracking-[15px] font-medium'>
            Software Engineer
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-2 text-orange-500'>{text}</span>
            <Cursor cursorColor='red' cursorBlinking={true}/>
          </h1>
        </div>

        <div className='pt-4'>
          <Link href='#about'>
            <button className='bannerButton'>About</button>
          </Link>
          <Link href='#projects'>
            <button className='bannerButton'>Projects</button>
          </Link>
          <Link href='#exp'>
            <button className='bannerButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='bannerButton'>Skills</button>
          </Link>
          
        </div>
        
    </div>
  )
}

export default Banner