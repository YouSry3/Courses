"use client"


import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import courses from "../_utils/courses";

export default function Departments() {
  


  const urlimgIT = "https://tse2.mm.bing.net/th?id=OIP.7Tfcsj8S42q5tKgmhX1CMwHaEX&pid=Api&P=0&h=220";
  const urlimgAI = "https://tse1.mm.bing.net/th?id=OIP.JzwcJFyZhHu7kAW6HKNOewHaFA&pid=Api&P=0&h=220";
  

  const getTypeDepart_=(depart)=>{
    courses.getTypeDepart(depart);
	}



  return (
    <div className='h-96'>

       <h2
       id='Departments'
       className='
         flex justify-center
       bg-gradient-to-r from-green-300 via-blue-500 
        to-purple-600 bg-clip-text text-3xl 
        text-[37px] mb-4
        font-extrabold text-transparent sm:text-5xl'>Departments</h2>
               <div className="mt-5 contaniner  grid grid-cols-2 gap-3">
          <div className="card">
          <img src={urlimgIT}   className='rounded-md  w-40 h-40 m-auto' alt="" />
              
          <button 
          onClick={()=>getTypeDepart_("IT")}
          class="
          mt-5
          border border-blue-500
          w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 
          text-blue-500 font-semibold py-2 px-4 rounded hover:bg-teal-50 
          focus:outline-none focus:ring-2 focus:ring-blue-500
           focus:ring-opacity-50">
                Choose
          </button>
              

              </div> 

              
          <div className="card">
          <img src={urlimgAI} className='rounded-md w-40 h-40 flex m-auto' alt="" />
          <button
          onClick={()=>getTypeDepart_("IT")}
          class="
          mt-5
          border border-blue-500
          w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 
          text-blue-500 font-semibold py-2 px-4 rounded hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            
            Choose
          </button>
              </div> 
              </div>
          

    </div>
  )
}
