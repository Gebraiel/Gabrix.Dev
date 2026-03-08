import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const contacts=[
    {
        name:"Phone",
        icon:<FaPhoneAlt/>,
        contact:<Link href="tel:+201273899330">+201273899330</Link>,
    },
    {
        name:"Email",
        icon:<FaEnvelope/>,
        contact:<Link href="mailto:gebraielmalak63@gmail.com">gebraielmalak63@gmail.com</Link>,
    },
    
]
const social = [
  {
    icon:<FaGithub/>,
    link:"https://github.com/Gebraiel"
  },{
     icon:<FaLinkedinIn/>,
    link:"https://www.linkedin.com/in/gebraiel-malak/"
  }
]
export default function Contacts() {
  return (
    <div className='flex flex-col justify-center gap-5'> 
        <div className='flex md:flex-col sm:flex-row flex-col gap-5'>
            {contacts.map((contact)=>{
            return(
                <div key={contact.name} className='flex  gap-5 items-center'>
                    <div className='flex justify-center items-center w-15 aspect-square bg-secondaryBg text-secondary text-2xl'>
                        {contact.icon}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-xs text-white/50'>{contact.name}</span>
                        <span className='sm text-white'>{contact.contact}</span>
                    </div>
                </div>
                
            )
        })}
        </div>
        <ul className="flex  gap-3">
                    {
                      social.map((item,index)=><li key={index}><Link href={item.link} target="_blank" className="w-10 aspect-square flex justify-center items-center border border-secondary hover:bg-secondary hover:text-background duration-300 rounded-full text-secondary">{item.icon}</Link></li>
                      )
                    }
        </ul>
    </div>
  )
}
