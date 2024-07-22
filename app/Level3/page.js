"use client"
import TableCourses from "../_components/TableCourses";
import courses from "../_utils/courses"

import React from 'react'

function page() {

  
  const nextSemester = " Next Semster";
  const dataCourses1 =[
    {
      id:1,
      title:localStorage.getItem("departDB")==="IT"? 
      "Network Routing and Switching-Lab": "Computer Vision",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "not open Courses":"not open Courses"],
    },
    {
      id:2,
      title:"Artificial intelligence",
      whichOPen:["Selected labs in AI L(4) in S(2)"],
    },
    {
      id:3,
      title:"Operating Systems",
      whichOPen:["not open Courses"],
    },
    {
      id:4,
      title:"Computer Organization",
      whichOPen:["not open Courses"],
    },
    {
      id:5,
      title:"Algorithms analysis and Design",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "Selected labs in Software Engineering L(4) in S(1)":"not open Courses"],
    },
    {
      id:6,
      title:localStorage.getItem("departDB")==="IT"?
      "Digital Signal Processing":"Computational mathematics for learning and data analysis",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "Pattern Recognition"+nextSemester:"Big Data"+nextSemester],
    }
  ];

  console.log(courses.getTypeDepart.obj);

  const dataCourses2 =[
    {
      id:1,
      title:localStorage.getItem("departDB")==="IT"?
      "Pattern Recognition":"Reinforcement and Deep Learning",
      whichOPen:["not open Courses"],
    },
    {
      id:2,
      title:localStorage.getItem("departDB")==="IT"?
      "Information Computer Networks Security":"Natural Languages Processing",
      whichOPen:["not open Courses"],
    },
    {
      id:3,
      title:localStorage.getItem("departDB")==="IT"?
      "op-Natural Language Processing":"AI Systems Design and Implementation",
      whichOPen:["not open Courses"],
    },
    {
      id:4,
      title:localStorage.getItem("departDB")==="IT"?
      "Advanced Software Engineering":"Intelligent Autonomous Robotics",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        ["Selected labs in Software Engineering"+nextSemester,
        "Software Security L(4) in S(2)"]:"not open Courses"],
    },
    {
      id:5,
      title:localStorage.getItem("departDB")==="IT"?
      "Microcontroller":"Dig Data",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "Embedded Systems"+nextSemester:"not open Courses"],
    },
    {
      id:6,
      title:localStorage.getItem("departDB")==="IT"?
      "Ethical Hacking-lab":"NULL",
      whichOPen:["not open Courses"],
    }
  ];
  
  return (
    <div>
          
            <TableCourses  dataCourses1={dataCourses1} dataCourses2={dataCourses2}/>

    </div>
  )
}

export default  page;
