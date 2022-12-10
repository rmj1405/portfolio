import React from 'react'
import Image from 'next/image'
import ftslogo from '../assets/fts-logo.png'
import { motion } from 'framer-motion'

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] snap-center p-10 cursor-pointer overflow-hidden'>
        <motion.div
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full object-cover object-center
        xl:w-[150px] xl:h-[150px]' >
            <Image
            src={ftslogo}
            alt=''/>
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl text-red-600 font-light'>UI/UX Desginer</h4>
            <p className='font-semibold text-2xl text-gray-800 mt-1'>NUS Fintech Society</p>

            {/* Unordered list */}
            <ul className='list-disc space-y-4 ml-5 text-lg text-gray-600'>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
                <li>Summary Point</li>
            </ul>
        </div>

        
    </article>
  )
}

export default ProjectCard