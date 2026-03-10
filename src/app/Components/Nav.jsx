"use client"
import React, { useState,useEffect } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {AnimatePresence,motion} from "motion/react"
const menu=[
    {
        title:"Home",
        link:"/"
    },
    {
        title:"Services",
        link:"/services"
    },
    {
        title:"My Journey",
        link:"/journey"
    },
    {
        title:"Work",
        link:"/work"
    },
    {
        title:"Contact",
        link:"/contact"
    },
    
]
export default function Nav() {
    const[isActive,setIsActive]=useState(false)
    const path = usePathname();
    useEffect(()=>{
        setIsActive(false)
    },[path])
    return (
        <>
            <button onClick={()=>setIsActive(true)} className='burger-button lg:hidden block w-5 h-5  relative group cursor-pointer'>
                        <div className='w-1/2 h-0.5 bg-secondary absolute top-1/2 right-0 -translate-y-1/2 group-hover:w-full duration-300'></div>
            </button>
            <nav className='lg:block hidden'>
                <ul className="flex gap-5" >
                    {
                        menu.map((item)=>{
                            return(
                                <li key={item.title} className={`${path === item.link ? "text-secondary border-b":"text-white hover:text-secondary duration-300  "}`}><Link href={item.link}>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </nav>
            
            <AnimatePresence>
                    {
                        isActive && 
                        <motion.nav initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} className='absolute left-0 top-0 w-screen h-screen after:contents-[""] after:block  after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-[rgba(0,0,0,0.3)] z-2'>
                            <button className='text-white absolute right-5 top-5 z-4' onClick={()=>setIsActive(false)}>X</button>
                            <ul className="flex flex-col items-center justify-center absolute right-0 w-1/2 h-full bg-background  text-white gap-5 z-3">
                                <li className='mb-20'><Logo/></li>
                            
                            {
                                    menu.map((item)=>{
                                        return(
                                            <li key={item.title} className={`${path === item.link ? "text-secondary border-b":"text-white hover:text-secondary duration-300"}`}><Link href={item.link}>{item.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </motion.nav>
                    }
                </AnimatePresence>
        
        </>
    
  )
}
