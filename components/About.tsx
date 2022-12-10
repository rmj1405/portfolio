import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import mypic from '../assets/Subject.png'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    className='flex flex-col relative text-center h-screen md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-red-600 text-2xl'>
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
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-contain
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]'
            />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10 w-[700px]'>
            <h4 className='text-3xl text-red-600 font-semibold'>My name is Ritika Joshi</h4>
            <p className='text-gray-500 text-base'>
                I am a rising software engineer pursuing Computer Science at the National
                University of Singapore. I am a rising software engineer pursuing Computer Science at the National
                University of Singapore. I am a rising software engineer pursuing Computer Science at the National
                University of Singapore. 
                <br/>
                <br/>
                I am a rising software engineer pursuing Computer Science at the National
                University of Singapore. I am a rising software engineer pursuing Computer Science at the National
                University of Singapore. I am a rising software engineer pursuing Computer Science at the National
                University of Singapore. I am a rising software engineer pursuing Computer Science at the National
                University of Singapore. 

                
            </p>
        </div>
    </motion.div>
  )
}

export default About