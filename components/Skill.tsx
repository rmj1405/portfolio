import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Skill = (props: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                opacity:0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            className='rounded-full border border-gray-300 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-26 xl:h-26 
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-orange-200 w-20 h-20 md:w-24 md:h-24 xl:w-26 xl:h-26 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-semibold text-red-600 opacity-100'>100%</p>
            </div>
        </div>

    </div>
  )
}

export default Skill