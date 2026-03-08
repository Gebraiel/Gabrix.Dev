import React from 'react'

export default function Form() {
  return (
    <div className='bg-secondaryBg p-5 rounded-2xl'>
        <p className='text-secondary text-3xl mb-3'>Let's work together</p>
        <p className='text-white/60'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum id exercitationem tempore vel iure consectetur vero accusantium minima nulla, quis impedit numquam laborum, nam at possimus corporis aliquid. Nihil, repudiandae.</p>
        <form>
            <div className='space-y-5 gap-5 my-5'>
                <div className='input-container  bg-background p-2 text-white placeholder:text-white/50'>
                    <input type="text" className='w-full focus:border-none focus:outline-none' name="name" placeholder='name'/>
                </div>
                <div className='input-container  bg-background p-2 text-white placeholder:text-white/50'>
                    <input type="text" className='w-full focus:border-none focus:outline-none' name="email" placeholder='email'/>
                </div>
                <div className='input-container  bg-background p-2  text-white placeholder:text-white/50'>
                    <select className='w-full focus:border-none focus:outline-none' name="service" >
                        <option value=""   hidden  className='bg-background'>Choose your service</option>
                        <option value="website-development" className='text-secondary bg-background'>Website Development</option>
                        <option value="website-deploying" className='text-secondary bg-background'>Website Deploying</option>
                        <option value="website-maintenance" className='text-secondary bg-background'>Website Maintenance</option>
                    </select>
                </div>
                <div className='input-container bg-background p-2 text-white placeholder:text-white/50'>
                    <input className='w-full focus:border-none focus:outline-none' type="text" name="phone" placeholder='type your phone number'/>
                </div>
                <div className='input-container  bg-background p-2 text-white placeholder:text-white/50 col-span-2 h-52'>
                    <textarea className='resize-none w-full focus:border-none focus:outline-none' name="message" placeholder='type your message'/>
                </div>
            </div>
            <button className='bg-secondary text-background px-4 py-2 rounded-full text-sm'>Send Message</button>
        </form>
    </div>
  )
}
