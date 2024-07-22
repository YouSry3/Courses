
"use client"

import React from 'react'

function Level() {
  
  const currentCourse1 = JSON.parse(localStorage.currentCourse1);

  return (
    <div className='bg-teal-500' >
      <h1 
      className='text-[2.3rem] p-20'>{currentCourse1.title}</h1>
    


<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Courses</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    {currentCourse1.whichOPen.map((course)=>
         
      <tr className="odd:bg-gray-50">
        <td className=" text-[1.2rem] whitespace-nowrap px-4 py-2 font-medium text-gray-900">{course}</td>
    </tr>
        )}
      


    
    </tbody>
  </table>
</div>

      
    </div>
  )
}

export default Level

