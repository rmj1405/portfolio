import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-red-600 text-md md:text-2xl'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory justify-center'>
            <ExpCard/>
        </div>
    </motion.div>
  )
}

export default Experience