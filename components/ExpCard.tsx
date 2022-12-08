import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import mypic from '../assets/ss.png'

type Props = {}

function ExpCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] snap-center bg-orange-200 bg-opacity-40 p-10 hover:opacity-100
    opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full object-cover object-center
        xl:w-[150px] xl:h-[150px]'
        src='https://nusfintechsociety.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd63861ab-9c0f-4d48-b1ea-84cecc103cdc%2FScreenshot_2022-06-30_at_9.52.36_AM.png?table=block&id=af1705d6-afe4-4e9c-a1c7-2c83d6e34c82&spaceId=8fe65b35-ffe5-4aaf-a7b4-f8b7e744d55f&width=250&userId=&cache=v2'
        alt=''/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl text-red-600 font-light'>UI/UX Desginer</h4>
            <p className='font-semibold text-2xl text-gray-800 mt-1'>NUS Fintech Society</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                <Image 
                className='rounded-full h-10 w-10'
                src={mypic}
                alt=''
                />

                <Image 
                className='rounded-full h-10 w-10'
                src={mypic}
                alt=''
                />
            </div>
            <p className='uppercase py-5 text-gray-600'>Start: - Current</p>

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

export default ExpCard