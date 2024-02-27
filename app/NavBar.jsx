'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


function NavBar() {
  const currentPath = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const menuButton = menuOpen ? (
    <button className="md:hidden hover:text-zinc-900 text-xl " onClick={toggleMenu}>
      <IoMdClose />
    </button>
  ) : (
    <button className="md:hidden hover:text-zinc-900 text-xl " onClick={toggleMenu}>
      <CiMenuFries/>
    </button>
  );
  const links = [
        {label: 'Home', href:'/'},
        {label: 'about', href:'/about'},
        {label: 'projects', href:'/projects'},
        {label: 'apparatus', href:'/apparatus'},
    ]

  return (
    <nav className={`md:flex md:justify-center md:items-center md:space-x-6 md:border-solid md:border-2 md:border-slate-100 md:rounded md:m-4 w-2/4 p-2 sticky shadow-md`}>
        <div className="flex justify-between float-right">
          {menuButton}
          <div className={`md:flex md:items-center md:space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
            <ul className="md:flex md:items-center md:space-x-6 md:flex-row">
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