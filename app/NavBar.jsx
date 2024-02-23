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
    <nav  className="border-solid border-2 border-slate-100 rounded m-4 w-2/4 p-2">
      <div className="flex justify-between items-center">
      <button className="block md:hidden" onClick={toggleMenu}>
        <CiMenuFries/>
      </button>
        <ul className="{`flex ${menuOpen ? 'flex-col' : 'hidden'} md:flex md:items-center md:space-x-6 md:flex-row`}">
            {links.map(link => <Link key={link.href}className={`${link.href === currentPath ? "text-zinc-900" :"text-zinc-500"} hover:text-zinc-800 transition-colors`} href={link.href}>{link.label}</Link>)}
        </ul>
      </div>
    </nav>
  ) 
}

export default NavBar