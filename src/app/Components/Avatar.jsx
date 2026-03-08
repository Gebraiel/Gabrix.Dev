"use client";
import React from 'react'
import {motion} from "motion/react"
import Image from "next/image";

export default function Avatar() {
  return (
    <motion.div initial={{opacity:0}} animate= { { opacity:1,transition: { duration:0.7,delay:0.5} } }  className="sm:w-1/2 w-full max-w-[500px] overflow-hidden aspect-square relative flex justify-center items-center">
                <div className="absolute left-0 top-0 w-full h-full overflow-hidden ">

                  <motion.svg className="w-full h-full" fill="transparent" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle cx="253" cy="253" r="240" stroke="#00ff99" strokeLinecap="round" strokeWidth="4" strokeLinejoin="round" initial={{strokeDasharray:"24 10 0 0 "}} animate={{strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],rotate:[120,360],transition:{duration:20,repeat:Infinity,repeatType:"reverse"}}}/>

                  </motion.svg>
                </div>
                <div className="relative w-[80%] aspect-square">                
                  <Image src="/gebraiel-circular.png" alt="Gebraiel Malak Photo" className="object-cover object-top " fill/>

                </div>
    </motion.div>
  )
}
