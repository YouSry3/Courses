"use client"

import React, { useEffect, useState } from 'react'
import page from "../Details/page"
import Level from '../Details/page';
function TableCourses({dataCourses1,dataCourses2}) {
  

  const handleDetailsClick = (course) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("currentCourse1",JSON.stringify(course))
    }
    }

console.log(localStorage.departDB);
  
  return (

<div className="overflow-x-auto">
   
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Semester</th>

        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    {dataCourses1.map((course)=>{
      return(

        <tr key={course.id}>
        <td  className="whitespace-nowrap px-10 py-2 font-medium text-gray-900">1</td>
        <td className="whitespace-nowrap px-4 hover:cursor-pointer  py-4 text-gray-700">{course.title.length<=22?
        course.title:
        course.title.slice(0,22)+"...more"}</td>
        
        <td className="whitespace-nowrap px-4 py-2">
          <a
          onClick={()=>handleDetailsClick(course)}
          
            href="/Details"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>
      )
    })}

    

  
    </tbody>
  </table>
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Semester</th>

        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    {dataCourses2.map((course)=>{
      return(

        <tr key={course.id}>
        <td  className="whitespace-nowrap px-10 py-2 font-medium text-gray-900">2</td>
        <td className="whitespace-nowrap px-4 hover:cursor-pointer  py-4 text-gray-700">{course.title.length<=22?
        course.title:
        course.title.slice(0,22)+"...more"}</td>
        
        <td className="whitespace-nowrap px-4 py-2">
          <a
          onClick={()=>handleDetailsClick(course)}
          
            href="/Details"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>
      )
    })}

    

  
    </tbody>
  </table>
  
    </div>
  )
}

export default TableCourses
