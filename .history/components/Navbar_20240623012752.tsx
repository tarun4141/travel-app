import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className='border-2
   border-red-500
  flexBetween max-container
  padding-container
  relative z-30 py-5 '>
   <Link href="/"> 
   <Image src="/hilink-logo.svg"
   />
   </Link>

   </nav>
  )
}

export default Navbar
