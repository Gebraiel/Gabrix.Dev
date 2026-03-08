"use client";
import React, { useRef } from 'react'
import WorkItem from './WorkItem'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import {  FaAngleRight} from "react-icons/fa";
import {  FaAngleLeft} from "react-icons/fa";

export default function WorkSlider() {
  const projects=[
    {
    id:1,
    name:"Handy",
    description:"Alex Converta for paper industries – Handy is an Egyptian leader in tissue paper production.",
    skills:["React","TailwindCss"],
    demo:"https://handy.com.eg/",
    image:"/Projects/handy.png"
  },
  {
    id:2,
    name:"Rimal Semiconductor",
    description:"Rimal Semiconductor is website for Saudi Arabia’s first fabless power chip design house, focused on building national capability in semiconductor design.",
    skills:["Wordpress,Elementor"],
    demo:"https://rimalsemiconductors.com/",
    image:"/Projects/rimal.png"
  },
  {
    id:3,
    name:"RAK Fruits",
    description:"Based in the Netherlands, RAK is a trusted importer of top-quality Egyptian fresh produce.",
    skills:["Wordpress,Elementor"],
    demo:"https://rakfruits.nl/",
    image:"/Projects/rakfruits.png"
  },
  {
    id:4,
    name:"Lacrapulestudio Colne",
    description:"A front-end clone of the Lacrapule Studio website created for educational purposes. The project recreates the original UI and layout to practice responsive design, layout structuring, and modern front-end development techniques.",
    skills:["React,TailwindCss,GSAP"],
    demo:"https://lacrapulestudio-clone.vercel.app/",
    image:"/Projects/lacrapulestudio.png"
  },
  {
    id:5,
    name:"Big Now",
    description:"Big Now is a front-end clone inspired by the Zentro website.",
    skills:["HTML,TailwindCss,JS,GSAP"],
    demo:"https://gebraiel.github.io/BIG-Now/",
    image:"/Projects/bignow.png"
  },

]
  return (
    <Swiper slidesPerView={1}   modules={[Navigation]}  navigation={{
    prevEl: ".prev",
    nextEl: ".next",
  }}
>
        {projects.map((project)=>{
          return(
            <SwiperSlide><WorkItem project={project}/></SwiperSlide>
          )
        })}
          <div className="flex gap-2 justify-end my-5">
              <button  className="prev w-10 aspect-square flex justify-center items-center bg-secondary disabled:bg-white/20 disabled:cursor-auto text-background text-xl cursor-pointer"><FaAngleLeft/></button>
              <button  className="next w-10 aspect-square flex justify-center items-center bg-secondary disabled:bg-white/20 disabled:cursor-auto text-background text-xl cursor-pointer"><FaAngleRight/></button>
        </div>
    </Swiper>
  )
}
