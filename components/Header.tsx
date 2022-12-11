import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: 0,
                opacity: 0.5,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.5,
            }}
        className='flex flex-row items-center'>
            {/* Social Icons - make it open in a new tab*/}
            <SocialIcon 
            url="https://github.com/rmj1405" 
            fgColor='grey'
            bgColor='transparent'
            target={'_blank'}
            />
            <SocialIcon 
            url="https://linkedin.com/in/ritika-manish-joshi-812b66204" 
            fgColor='grey'
            bgColor='transparent'
            target={'_blank'}
            />
        </motion.div>

        

        <motion.div 
            initial={{
                x: 0,
                opacity: 0.5,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.5,
            }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            
            <SocialIcon
            url='#contact'
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'
            />

            <Link href={'#contact'}>
                <p className='hidden md:inline-flex text-sm text-gray-500'>Get In Touch</p>
            </Link>
        </motion.div>
        
    </header>
  )
}

export default Header