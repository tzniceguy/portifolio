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
      <div className={`md:flex md:items-center md:space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
  <ul>
    {links.map(link => (
      <li key={link.href}>
        <Link className={`${link.href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition-colors`} href={link.href}>
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

      </div>
    </nav>
  ) 
}

export default NavBar