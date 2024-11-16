import React from 'react'
import NavHead from './NavHead'
import { motion } from "motion/react"
function Header() {
  return (
<div className='min-h-screen mb-4 bg-cover bg-center items-center flex w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <NavHead/>
        <motion.div 
        initial={{ opacity: 0, y:100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y:0}}
        viewport={{ once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fits your dreams</h2>
            <div className='space-x-6 mt-16'>
                <a className='border border-white px-8 py-3 rounded' href="#project">Projects</a>
                <a className='bg-blue-500 px-8 py-3 rounded' href="#Contact">Contact us</a>
                
            </div>
        </motion.div>
    </div>
  )
}

export default Header