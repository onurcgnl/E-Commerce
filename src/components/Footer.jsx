import React from 'react'
import Logo from "../assets/img/logo.png"
import CreditCard from"../assets/img/credit-card.png"


 const Footer = () => {
  return (
<div className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between ">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Parrot</span>
           <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-2">©  <a href="#" className="hover:underline">Parrot™</a> All Rights Reserved.
             </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
      </div>
        <img src={CreditCard} alt='credit-card' className='h-12 '></img>
</div>
  )
}

export default Footer
