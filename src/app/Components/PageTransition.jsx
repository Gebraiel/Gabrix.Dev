"use client"
import { AnimatePresence,motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import React, { useLayoutEffect, useState } from 'react'
import Loader from './Loader'

export default function PageTransition({children}) {
    const pathname=usePathname()
    return (
      <>
          <AnimatePresence mode="wait">
            <Loader key={pathname}  />
            {children}
          </AnimatePresence>

      </>
  )
}
