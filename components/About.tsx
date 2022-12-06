import { motion } from 'framer-motion'
import React from 'react'

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

        <motion.img 
            initial={{
                x : -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x : 0 }}
            viewport={{ once: false }}
            src='../assets/ss.png'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl text-red-600 font-semibold'>here is a bg</h4>
            <p className='text-gray-500 text-base'>
                A whole ass paragraph of words about me
            </p>
        </div>
    </motion.div>
  )
}

export default About