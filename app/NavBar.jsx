'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from "react-icons/ci";

function NavBar() {
  const currentPath = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

    const links = [
        {label: 'Home', href:'/'},
        {label: 'about', href:'/about'},
        {label: 'projects', href:'/projects'},
        {label: 'apparatus', href:'/apparatus'},
    ]

  return (
    <nav  className="md:border-solid md:border-2 md:border-slate-100 md:rounded md:m-4 w-2/4 p-2 float-right sticky shadow-md">
      <div className="flex justify-between float-right">
      <button className="md:hidden hover:text-zinc-900 text-xl " onClick={toggleMenu}>
        <CiMenuFries/>
      </button>
      <div className="hidden md:block">
        <ul className="{`md:flex ${menuOpen ? 'md:flex-col' : 'hidden'} md:flex md:items-center md:space-x-6 md:flex-row`}">
            {links.map(link => <Link key={link.href}className={`${link.href === currentPath ? "text-zinc-900" :"text-zinc-500"} hover:text-zinc-800 transition-colors`} href={link.href}>{link.label}</Link>)}
        </ul>
      </div>
      </div>
    </nav>
  ) 
}

export default NavBar