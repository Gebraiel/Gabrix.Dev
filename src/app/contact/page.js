import React from 'react'
import Form from '../Components/Form'
import Contacts from '../Components/Contacts'

export default function Contact() {
  return (
    <main className="flex justify-center items-start h-full  ">
        <div className="container">
            <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
                <Form/>
                <Contacts/>
            </div>
        </div>
    </main> 
  )
}
