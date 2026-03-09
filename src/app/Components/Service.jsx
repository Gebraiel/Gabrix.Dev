import React from 'react'
import { GoArrowDownRight } from "react-icons/go";

export default function Service({service,index}) {
    const{name,description,icon} = service;
  return (
    <div className='pb-5 border-b border-white/20 space-y-5 group service'>
        <div className='flex justify-between items-center'>
            <span className='stroke-text text-5xl group-hover:text-stroke-secondary'>{`${index < 10 ? "0":""}${index}`} </span>
            <span className="w-12 rounded-full text-2xl aspect-square flex justify-center items-center bg-white text-secondaryBg group-hover:bg-secondary duration-300">{icon}</span>
        </div>
        <p><strong className='text-white text-4xl'>{name}</strong></p>
        <p className='text-white/50 text-sm'>{description}</p>
    </div>
  )
}
