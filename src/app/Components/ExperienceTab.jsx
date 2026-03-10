import React from 'react'
import {motion} from "motion/react"
const experiences = [
   {
        position:"Code Instructor ",
        company : "Engineeius",
        duration : "2020 - 2023",
        features:[
            "Delivering programming lessons to children, simplifying complex concepts.",
            "Teaching the fundamentals of coding and computational thinking.",

        ]
    }, {
        position:"Frontend Developer ",
        company : "RASANS",
        duration : "2023 - Present",
        features:[
            "Transforming UI/UX designs into high-performance, pixel-perfect frontend implementations.",
            "Building responsive and user-friendly web applications using React.js and Tailwind CSS.",
            "Collaborated with backend developers to integrate APIs securely and efficiently.",
            "Deploying and maintaining websites for various clients."
        ]
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
            staggerChildren: 0.7,
            duration:0.7
        }
    }
}
export default function ExperienceTab() {
  return (
    <div>
        <motion.strong variants={fadeinVarient} initial="hidden" animate="visible" exit="hidden" className='text-secondary text-3xl' >My Experience</motion.strong>
        <motion.p variants={fadeinVarient} initial="hidden" animate="visible" exit="hidden" className='text-white mt-4 '>While studying at university, I wanted to share what I was learning, so I started working as a Code Instructor at Engineeius, teaching students the fundamentals of programming and helping them take their first steps into coding. This experience helped me strengthen my own understanding of programming concepts and improve my problem-solving skills. Later, I worked as a Frontend Developer at RASANS, where I contributed to building responsive user interfaces and modern web experiences for real-world projects.</motion.p> 
        <motion.div variants={parentVarient} initial="hidden" animate="visible" exit="hidden" className='flex flex-col gap-5 mt-4 '>
            {experiences.map((experience)=>
                <motion.div variants={fadeinVarient} className='bg-secondaryBg p-5 rounded-xl' key={experience.position+experience.company}>
                    <p className='text-white/50 text-sm'>{experience.duration}</p>
                    <b className='text-white text-lg capitalize my-2 block' >{experience.position} at {experience.company}</b>
                    <ul className='list-disc list-inside space-y-2'>
                        {experience.features.map((feature,index)=><li className='text-white/50 capitalize text-sm' key={index}>{feature}</li>)}
                    </ul>
                </motion.div>
            )}
        </motion.div>
    </div>
  )
}
