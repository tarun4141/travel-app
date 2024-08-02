import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
//import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flex-between max-container padding-container relative z-30 py-5'>
        <Link href="/">
            
            
            <Image src="/hilink-logo.svg"alt="logo" 