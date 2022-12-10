import React from 'react'
import Image from 'next/image'
import ftslogo from '../assets/fts-logo.png'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3]
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
        justify-evenly mx-auto items-center z-0'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-red-600 text-2xl'>
            Projects
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-red-400 font-normal text-sm'>
            Swipe left for more
        </h3>

        {/* Project Card WIP */}
        {/* <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory justify-center'>
            <ProjectCard/>
            <ProjectCard/>
        </div> */}

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 '>
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:p-44 h-screen'>
                    <motion.div
                        initial={{ 
                            //y: -300,
                            opacity: 0 
                        }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2 }} >
                        <Image
                        src={ftslogo}
                        alt=''
                        />
                    </motion.div>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center text-orange-600'>
                            {i + 1}<span className='font-light'> | </span>Colourz Android App
                        </h4>
                        <p className='text-lg text-center md:text-left text-gray-700'>
                            Brief description of the project Brief description of the project Brief description of the 
                            projectBrief description of the projectBrief description of the project
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-red-700/20 left-0 h-[450px] -skew-y-12'>
        </div>

        {/* <div className='flex items-center space-x-2'>
            <div className=' bg-orange-300 w-40 h-15 p-3 justify-center'>
                <h5 className='font-semibold text-gray-600'>GitHub</h5>
            </div>
            <div className=' bg-orange-300 w-40 h-15 p-3 '>
                <h5 className='font-semibold text-gray-600'>Live Demo</h5>
            </div>
        </div> */}
        
    </motion.div>
  )
}

export default Projects