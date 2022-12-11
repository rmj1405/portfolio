import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import mypic from '../assets/ritika.jpg'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    className='flex flex-col relative text-center h-screen md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-red-600 text-md md:text-2xl'>
            About
        </h3>

        <motion.div
            initial={{
                x : -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x : 0 }}
            viewport={{ once: false }}
            >

            <Image
                src={mypic}
                alt=''
                className='-mb-20 md:mb-0 flex-shrink-0 w-[180px] h-[180px] object-contain
                md:rounded-lg md:w-[400px] md:h-[400px]'
            />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10 w-[300px] md:w-[700px]'>
            <h4 className='text-lg md:text-3xl text-red-600 font-semibold'>Hi, it's Ritika Joshi.</h4>
            <p className='text-gray-500 text-sm md:text-lg'>
                I am a <span className='text-red-600'>
                    software engineer and eco-entrepreneur</span> pursuing Computer Science at the National
                University of Singapore. 
                <br/>
                <br/>
                I enjoy developing web and mobile applications that <span className='text-red-600'>make an impact 
                on the community </span> 
                and consider it as my way of giving back to society. 
                <br/>
                <br/>
                Outside of programming, I am passionate about environmental sustainability and I am a co-founder 
                of a home based business that sells biodegradable tableware.

                
            </p>
        </div>
    </motion.div>
  )
}

export default About