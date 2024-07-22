"use client"

import React from 'react'
import TableCourses from "../_components/TableCourses";

export default function page() {
  const nextSemester = " Next Semster";

  const dataCourses1 =[
    {
      id:1,
      title:localStorage.getItem("departDB")==="IT"?
      "Selected labs in Software Engineering":"Elective 1",
       whichOPen:["not open Courses"],
    },
    {
      id:2,
      title:localStorage.getItem("departDB")==="IT"?
      "Embedded Systems	":"Elective 2",
      whichOPen:["not open Courses"],
    },
    {
      id:3,
      title:localStorage.getItem("departDB")==="IT"?
      "Computer Graphics":"Elective 3",
      whichOPen:["not open Courses"],
    },
    {
      id:4,
      title:localStorage.getItem("departDB")==="IT"?
      "Advanced Computer Networks":"Reasoning and Knowledge Representation",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        ["Cloud Computing Networking"+nextSemester,
        "Wireless and Mobile Networks"+nextSemester]:"not open Courses"
      ],
    },
    {
      id:5,
      title:localStorage.getItem("departDB")==="IT"?
      "Project (1)":"Advanced Machine Learning lab",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "Project (2)"+nextSemester:"not open Courses"],
    },
    {
      id:6,
      title:localStorage.getItem("departDB")==="IT"?
      "Communication Technology":"Graduation Project",
      whichOPen:["not open Courses"],
    }
  ];


  const dataCourses2 =[
    {
      id:1,
      title:localStorage.getItem("departDB")==="IT"?
      "Cloud Computing Networking":"Elective 4",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "End Course in Department IT":"End Course in Department AI"],
    },
    {
      id:2,
      title:localStorage.getItem("departDB")==="IT"?
      "Software Security":"Elective 5",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "End Course in Department IT":"End Course in Department AI"],
    },
    {
      id:3,
      title:localStorage.getItem("departDB")==="IT"?
      "Wireless and Mobile Networks":"AI Cloud Services lab",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "End Course in Department IT":"End Course in Department AI"],
    },
    {
      id:4,
      title:localStorage.getItem("departDB")==="IT"?
      "Fundamental of Management":"Fundamental of Management",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "End Course in Department IT":"End Course in Department AI"],
    },
    {
      id:5,
      title:localStorage.getItem("departDB")==="IT"?
      "Project (2)":"Selected labs in AI",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "End Course in Department IT":"End Course in Department AI"],
    },
    {
      id:6,
      title:localStorage.getItem("departDB")==="IT"?
      "Selected labs in AI":"Graduation Project",
      whichOPen:[localStorage.getItem("departDB")==="IT"?
        "End Course in Department IT":"End Course in Department AI"],
    }
  ];

  return (
    <div>
            <TableCourses  dataCourses1={dataCourses1} dataCourses2={dataCourses2}/>

    </div>
  )
}
