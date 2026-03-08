import React, { useContext } from 'react'
import { TabsContext } from '../Context/TabsContext'
import {motion} from"motion/react"
export default function ResumeSideBar() {
  const tabs=[
    "Experience",
    "Education",
    "Skills"
  ]
  const fadeinVarient = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            duration:0.5
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
            staggerChildren: 0.3,
            duration:0.5
        }
    }
}
  const {activeTab,setActiveTab} = useContext(TabsContext)
  return (
    <div className='md:max-w-md w-full'>
        <motion.h1 variants={fadeinVarient} initial="hidden" animate="visible" className='text-white text-3xl font-bold mb-3' >Why Hire Me? </motion.h1>
        <motion.p variants={fadeinVarient} initial="hidden" animate="visible" className='text-white/50 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </motion.p>
        <motion.div variants={parentVarient} initial="hidden" animate="visible" className='space-y-5 my-10'>
            {tabs.map((tab,index)=><motion.button variants={fadeinVarient} key={index} onClick={()=>setActiveTab(index)} className={`w-full py-5  rounded-2xl  text-sm cursor-pointer ${activeTab == index ? 'bg-secondary text-background' : 'bg-secondaryBg text-white hover:bg-secondary hover:text-background duration-300 '}`}>{tab}</motion.button>)}
        </motion.div>
    </div>
  )
}
