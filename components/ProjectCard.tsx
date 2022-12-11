import React from 'react'
import Image from 'next/image'
import poster from '../assets/5016.png'
import c from '../assets/c.png'
import fbs from '../assets/fbs.png'
import java from '../assets/java.png'
import and from '../assets/and.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <article className='flex flex-col md:flex-row items-center justify-center space-x-40 flex-shrink-0 w-[350px] h-[600px]
    md:w-full md:h-[550px] snap-center bg-orange-200 bg-opacity-20 p-10 overflow-x-scroll rounded-md'>
        <motion.div
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: -60 }}
        viewport={{ once: true }}
        className='w-20 h-20 object-cover md:w-[300px] md:h-[300px] duration-500 md:hover:h-[400px] md:hover:w-[400px]' >
            <Image src={poster} alt=''/>
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-xl md:text-4xl text-red-600 font-light uppercase tracking-wide'>Colourz Android App</h4>

                <div className='flex items-center space-x-2 mt-4'>
                <Link 
                    href='https://github.com/joytqt-1202/Orbital-Team-Crayonz' 
                    target={'_blank'} 
                    className='flex flex-col text-sm md:text-lg md:w-30 h-8 p-3 justify-center rounded-full border border-red-700'>
                        <h5 className=' text-red-700'>GitHub</h5>
                </Link>
                <Link 
                    href='https://drive.google.com/file/d/18ducvIs1DgxN2Qew8eXkiBRxDgkP2Rsv/view?usp=share_link' 
                    target={'_blank'}
                    className='flex flex-col text-sm md:text-lg md:w-30 h-8 p-3 justify-center rounded-full border border-red-700'>
                        <h5 className=' text-red-700'>Demo</h5>
                </Link>
            </div>
            <div className='flex space-x-2 mt-3 items-center'>
                {/* Tech used */}
                <Image 
                className='h-8 w-8 md:h-12 md:w-12'
                src={and}
                alt=''
                />

                <Image 
                className='h-7 w-7 md:h-11 md:w-11'
                src={java}
                alt=''
                />
                <Image 
                className='h-4 w-4 md:h-8 md:w-8'
                src={fbs}
                alt=''
                />

                <Image 
                className='h-4 w-4 md:h-8 md:w-8'
                src={c}
                alt=''
                />
            </div>
            
            <div className='w-[350px] md:w-[700px] text-gray-600'>
                <p className='py-5 text-sm md:text-lg'>
                Mobile phone app where users can simulate various forms of colourblindness through photo filters
                on images from user's image gallery
                </p>

                {/* Unordered list */}
                <ul className='list-disc space-y-4 ml-5 text-sm md:text-lg'>
                    <li>App UI supports <span className='text-red-700 font-medium'>CRUD</span> (take image with camera, replace image, upload from gallery, delete) operations on photos with in-app navigation</li>
                    <li>Photo filters created natively with <span className='text-red-700 font-medium'>bitmap manipulation in C</span></li>
                    <li>Backend <span className='text-red-700 font-medium'>user management with Firebase</span></li>
                    <li>Created on Android Studio with Java</li>
                    
                </ul>
            </div>
        </div>

        
    </article>
  )
}

export default ProjectCard