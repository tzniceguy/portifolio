import React from 'react'
import { CiHeart } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-gray-200 p-4'>
      <div className="mx-auto text-center">
        <h4 className="inline-block">made with <CiHeart className="inline-block" /> by tzniceguy</h4>
      </div>
    </footer>
  )
}
