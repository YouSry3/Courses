import React from 'react'

import TableCourses from '../_components/TableCourses';
function page() {
  const mohamed ="mohamed";
  const nextSemester = " Next Semster";
  const dataCourses1 =[
    {
      id: 1,
      title: "Electronics",
      whichOPen:["Logic Design"+nextSemester],
    
    },
    {
      id: 2,
      title: "Mathematics1",
      whichOPen:[`Probability and Statistics-1 ${nextSemester}`,`Creative and Scientific Thinking ${nextSemester}`],
      
    },
    {
      id: 3,
      title: "Technical Report Writing",
      whichOPen:["not open Courses"],
    
    },
    {
      id: 4,
      title: "Human Rights",
      whichOPen:["not open Courses"],
      
    },
    {
      id: 5,
      title: "Discrete Math",
      whichOPen:["not open Courses"],
    
    },
    {
      id: 6,
      title: "Introduction to Computers",
      whichOPen:[`Programming Language ${nextSemester}`],
    }
  ];
  const dataCourses2 =[
    {
      id: 1,
      title: "Probability and Statistics-1",
      whichOPen:[`Probability and Statistics-2 ${nextSemester}`],
    
    },
    {
      id: 2,
      title: "Creative and Scientific Thinking",
      whichOPen:["not open Courses"],
      
    },
    {
      id: 3,
      title: "Mathematics-2",
      whichOPen:[`Mathematics-3 ${nextSemester}`],
      
    
    },
    {
      id: 4,
      title: "Micro Economics",
      whichOPen:["not open Courses"],
      
    },
    {
      id: 5,
      title: "Logic Design",
      whichOPen:["Computer Organization in L(3) S(1)"],
    
    },
    {
      id: 6,
      title: "Programming Techniques",
      whichOPen:[`Object Oriented Programing ${nextSemester}`,`Introduction to Database systems ${nextSemester}`,
        "Introduction to Software Engineering "+nextSemester,"Introduction to Operation Research in L(2) S(2)"
      ],
    }
  ];


  return (
    <>
      <TableCourses  dataCourses1={dataCourses1} dataCourses2={dataCourses2}/>
    </>
  )
}

export default  page;

