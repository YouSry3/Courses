'use client'


import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image'
import React, { use } from 'react'

function Header() {

  const imgemenofyia ="https://www.topuniversitiesegypt.com/ImageHandler.ashx?Id=12747&SS=35043c60082eb431e14708f92071a074";
  const { isSignedIn, user } = useUser();


  

  return (
    <header id='started' className="bg-white shadow-md">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <img src={imgemenofyia} className='w-12 h-12' alt="" />
          </a>
        </div>
  
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#footer"> Contact </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/sign-in"
            >
              Login
            </a>
  
            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
  
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
