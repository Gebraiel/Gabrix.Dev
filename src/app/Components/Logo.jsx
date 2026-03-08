"use client"
import Link from 'next/link'
import React from 'react'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
import {motion} from"motion/react";
export default function Logo() {
  return (
        <Link className='text-white md:text-3xl text-xl flex justify-center items-center' href="/">
          <motion.span  className='text-secondary'><FaAngleLeft /></motion.span>
          <motion.span initial={{width:"0"}} whileInView={{width:"100%",transition:{duration:0.7,delay:2}}} className='overflow-hidden'>Gabrix<span className='text-secondary md:text-5xl text-3xl leading-0'>.</span>Dev</motion.span> 
          <motion.span   className='flex items-center gap-0 text-secondary'>/<FaAngleRight/></motion.span>
        </Link>
  )
}
