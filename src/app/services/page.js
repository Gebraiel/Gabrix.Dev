import React from 'react'
import Service from '../Components/Service'
import { FaLaptopCode } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const services=[
    {
        name:"Web Development",
        description:"Modern and responsive websites built with clean and scalable code, focusing on performance, usability, and seamless user experiences.",
        icon:<FaLaptopCode/>
    }
    ,{
        name:"Web Deployment",
        description:"Professional deployment of websites to ensure a smooth and secure launch, including hosting setup and domain configuration.",
        icon:<IoCloudUpload/>
    }
    ,{
        name:"Performance Optimization",
        description:"Optimizing websites for speed and efficiency to deliver faster loading times and smooth user experiences across all devices.",
        icon:<IoIosSpeedometer/>
    }
    ,{
        name:"SEO Optimization",
        description:"Improving website visibility on search engines through optimized structure, performance, and SEO best practices.",
        icon:<FaSearch/>
    }
]
export default function Services() {
  return (
    <main className="flex justify-center items-center h-full  ">
            <div className="container">
                <div className='grid  md:grid-cols-2 grid-cols-1 gap-15'>
                    {
                        services.map((service,index)=><Service service={service} index={index+1} key={index}/>)
                    }
                </div>
            </div>
    </main> 
  )
}
