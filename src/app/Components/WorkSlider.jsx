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
    description:"Product catalog website for Egypt's leading tissue paper brand. Built a complex filterable product catalog using React.js, managing multi-filter state efficiently with custom hooks to deliver a fast, smooth user experience across all devices.",
    skills:["React","TailwindCss"],
    demo:"https://handy.com.eg/",
    image:"/Projects/handy.png"
  },
  {
    id:2,
    name:"Kobln",
    description:"E-commerce store for a Saudi fashion brand specializing in Linen clothes. Integrated with Tabby, Tamara, and ClickPay. Implemented product variations display in shop page, image gallery slider, bilingual support (AR/EN), and a custom PDF invoice export feature for the store owner.",
    skills:["wordpress","Wocommerce","Elementor","WPML"],
    demo:"https://kobln.com",
    image:"/Projects/kobln.png"
  },
  {
    id:3,
    name:"New Edge",
    description:"Corporate website for a Saudi marketing agency. Worked closely with a detail-oriented client through multiple revision cycles, refining the UI iteratively based on feedback . demonstrating strong communication and client management skills.",
    skills:["wordpress","Elementor","TranslatePress"],
    demo:"https://newedgesa.net",
    image:"/Projects/newedge.png"
  },
  {
    id:4,
    name:"Rimal Semiconductor",
    description:"Corporate website for Saudi Arabia's first fabless power chip design house. Delivered for an international client remotely. Tackled complex responsive design challenges across a large multi-page site, ensuring consistent layout and performance on all screen sizes. ",
    skills:["Wordpress,Elementor","TranslatePress"],
    demo:"https://rimalsemiconductors.com/",
    image:"/Projects/rimal.png"
  },
  {
    id:5,
    name:"RAK Fruits",
    description:"Corporate website for Saudi Arabia's first fabless power chip design house. Delivered for an international client remotely. Tackled complex responsive design challenges across a large multi-page site, ensuring consistent layout and performance on all screen sizes. ",
    skills:["Wordpress,Elementor","TranslatePress"],
    demo:"https://rakfruits.nl/",
    image:"/Projects/rakfruits.png"
  },
  {
    id:6,
    name:"Lacrapulestudio — GSAP Animation Clone",
    description:"A front-end clone of the Lacrapule Studio website created for educational purposes. The project recreates the original UI and layout to practice responsive design, layout structuring, and modern front-end development techniques.",
    skills:["React,TailwindCss,GSAP"],
    demo:"https://lacrapulestudio-clone.vercel.app/",
    image:"/Projects/lacrapulestudio.png"
  },
  {
    id:7,
    name:"Zentro — ScrollTrigger Practice",
    description:"A modern landing page clone built with HTML, Tailwind CSS, and GSAP.Implemented scroll-based animations using GSAP ScrollTrigger,horizontal scroll sections, and smooth hover transitions — showcasing advanced animation techniques without any JavaScript framework dependency.",
    skills:["HTML,TailwindCss,JS,GSAP"],
    demo:"https://gebraiel.github.io/BIG-Now/",
    image:"/Projects/bignow.png"
  }
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
