import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function WorkItem({project}) {
  const {id,name,description,skills,demo,image} = project;
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'> 
        <div>
            <div className='flex flex-col gap-5'>
                <span className='stroke-text text-6xl'>{`${id < 10 ? "0":""}${id}`} </span>
                <b className='text-white text-2xl'>{name}</b>
                <p className='text-white/60'>{description}</p>
                <ul className='flex gap-2'>
                    {
                        skills.map((skill,index)=>{
                            return(
                                <li className='text-secondary ' key={skill}>{`${skill}${index !=skills.length - 1 ? ", ":""} `}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <ul className='flex gap-2 pt-5 border-t border-white/60 mt-5'>
                <li ><Link className='flex justify-center items-center w-10 aspect-square bg-secondaryBg text-white text-xl rounded-full ' href={demo} target='_blank'><MdArrowOutward/></Link></li>
                {/* <li><Link  className='flex justify-center items-center w-10 aspect-square bg-secondaryBg text-white text-xl rounded-full '  href="" target='_blank'><FaGithub/></Link></li> */}
            </ul>
        </div>
        <div className="flex flex-col items-end gap-5">
            <div className='relative aspect-video w-full '> 
                <Image src={image} fill className="object-contain object-top" alt={name}/>
            </div>

           
        </div>
    </div>
  )
}
