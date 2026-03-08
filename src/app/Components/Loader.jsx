import React, { useEffect, useLayoutEffect, useState } from 'react'
import{ motion, stagger, useAnimate, usePresence} from "motion/react"
export default function Loader() {
    const panels = 6
   const panelsArray = Array.from({ length: panels });
   const [isPresent,safeToRemove] = usePresence();
   const [scope,animate]= useAnimate();
   useEffect(() => {
     if (isPresent) {
      const enterAnimation = async () => {
            await animate('.panel', { scaleY: 0 }, {
                delay: stagger(0.1),
                duration: 0.7,
                
            })

            await animate('.overlay', { opacity: 0 }, { duration: 0.4 })

            scope.current.style.pointerEvents = "none"
        }
       enterAnimation()

     } else {
       const exitAnimation = async () => {
        scope.current.style.pointerEvents = "auto"

        await animate('.overlay', { opacity: 1 }, { duration: 0.2 })

        await animate('.panel', { scaleY: 1 }, {
            delay: stagger(0.1),
            duration: 0.7,
        })
         safeToRemove()
       }
       exitAnimation()
     }
  }, [isPresent])
  return (

    <div ref={scope} className='absolute'>
        <div className='panel-container fixed left-0 top-0 w-screen h-screen flex flex-row z-[55]'>
            {panelsArray.map((_,index)=>{
                return(
                    <motion.div key={index}  className='panel bg-white origin-bottom flex-1'></motion.div>
                )
            })}
        </div>
        <motion.div  className='overlay bg-background w-screen h-screen fixed inset-0 z-[54]' />
        
    </div>
)

}
