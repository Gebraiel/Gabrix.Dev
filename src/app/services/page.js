import React from 'react'
import Service from '../Components/Service'
const services=[
    {
        name:"Web Development",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci deleniti eum minima quisquam quae harum iste autem! Dolore delectus quam voluptas, harum sunt facere at repellat mollitia ut vitae!"
    }
    ,{
        name:"Web Deployment",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci deleniti eum minima quisquam quae harum iste autem! Dolore delectus quam voluptas, harum sunt facere at repellat mollitia ut vitae!"
    }
    ,{
        name:"Web Maintenace",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci deleniti eum minima quisquam quae harum iste autem! Dolore delectus quam voluptas, harum sunt facere at repellat mollitia ut vitae!"
    }
    ,{
        name:"SEO",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci deleniti eum minima quisquam quae harum iste autem! Dolore delectus quam voluptas, harum sunt facere at repellat mollitia ut vitae!"
    }
]
export default function Services() {
  return (
    <main className="flex justify-center items-center h-full  z-1 relative">
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
