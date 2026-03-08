import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {motion} from "motion/react"

const skills = [
    {
        label:"HTML",
        icon:    <FaHtml5/>
    },
    {
        label:"CSS",
        icon:    <FaCss3/>
    },
    {
        label:"Tailwind CSS",
        icon:    <RiTailwindCssFill/>
    },
    
    {
        label:"Bootstrap",
        icon:    <FaBootstrap/>
    },

    {
        label:"JavaScript",
        icon:    <FaSquareJs/>
    },
    {
        label:"React.js",
        icon:    <FaReact/>
    },
    {
        label:"Next.js",
        icon:    <RiNextjsFill/>
    },
]
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
const parentVarient = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        
        transition :{
            staggerChildren: 0.2,
            duration:0.7
        }
    }
}
export default function SkillsTab() {
  return (
    <div>
        <motion.strong variants={fadeinVarient} initial="hidden" animate="visible" exit="hidden" className='text-secondary text-3xl' >My Skills</motion.strong>
        <motion.p variants={fadeinVarient} initial="hidden" animate="visible" exit="hidden" className='text-white my-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni dolorem, delectus atque repellat nemo nesciunt odio iure voluptate id quidem mollitia excepturi repellendus minus a accusantium magnam in ab?</motion.p> 
        <motion.div variants={parentVarient} initial="hidden" animate="visible" exit="hidden" className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4  gap-5'>
            {skills.map((skill)=>
                <motion.div key={skill.label} variants={fadeinVarient}  className='skill relative bg-secondaryBg p-5 text-white duration-300 md:text-5xl sm:text-6xl text-4xl  flex justify-center rounded-2xl aspect-square items-center' key={skill.label}>
                    {skill.icon}
                    <span className='absolute text-sm  text-background -top-7 bg-white px-3  py-1 rounded-lg opacity-0 duration-300 -z-0 '>{skill.label}</span>
                </motion.div>
            )}
        </motion.div> 
    </div>
  )
}
