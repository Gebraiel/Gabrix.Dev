import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
export default function Logo() {
  return (
        <Link href="/">
            <Image src="/gabrix-logo-green.png" width="400" height="63" className='max-w-[200px] ' alt="Gabrix.Dev Logo"/>
        </Link>
  )
}
