import React from 'react'
import {motion} from "motion/react"

const fadeinVarient = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            duration:0.7
        }
    }
}

export default function EducationTab() {
  return (
    <div>
        <motion.strong variants={fadeinVarient} initial="hidden" animate="visible" exit="hidden" className='text-secondary text-3xl'>My Education</motion.strong>
        <motion.p variants={fadeinVarient} initial="hidden" animate="visible" exit="hidden" className='text-white mt-4'>My journey with programming began in 2019 when I joined the Faculty of Computers and Artificial Intelligence at Cairo University. It was there that my passion for coding and software development truly started. During my studies, I learned many fundamental concepts in programming and computer science, and later joined the Computer Science (CS) department, where I continued building a strong technical foundation.</motion.p> 
        <div className='flex flex-col gap-5 mt-4 max-h-[350px] overflow-auto'>
            <motion.div variants={fadeinVarient} initial="hidden" animate="visible" exit="hidden" className='bg-secondaryBg p-5 rounded-xl'>
                <p className='text-white/50 text-sm'>2019-2023</p>
                <b className='text-white text-lg capitalize my-2 block' >Bachelor’s Degree in Computer Science and Artificial Intelligence</b>
                <ul className='list-disc list-inside space-y-2'>
                    <li className='text-white/50 capitalize text-sm' >Cairo University</li>
                </ul>
            </motion.div>
        
        </div>
    </div>
  )
}
