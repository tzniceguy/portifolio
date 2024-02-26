import React from 'react'
import { CiHeart } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className="py-4 border-t border-gray-200 dark:border-gray-800">
      <div className='fixed bottom-0 left-0 w-full p-4'>
        <div className="mx-auto text-center">
          <h4 className="inline-block">made with <CiHeart className="inline-block" /> by tzniceguy</h4>
        </div>
      </div>
    </footer>
  )
}
