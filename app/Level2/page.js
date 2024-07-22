import React from 'react'
import TableCourses from '../_components/TableCourses';

function page() {
  const nextSemester = " Next Semster";
  const dataCourses1 =[
    {
      id:1,
      title:"Object Oriented Programing",
      whichOPen:["Data Structure"+nextSemester,"Web Technology"+nextSemester],
    },
    {
      id:2,
      title:"Introduction to Database systems",
      whichOPen:["not open Courses"],
    },
    {
      id:3,
      title:"Mathematics-3",
      whichOPen:["Machine Learning Fundamentals"+nextSemester,"op-Natural Language Processing L(3) in S(2)"],
    },
    {
      id:4,
      title:"Probability and Statistics-2	",
      whichOPen:["Machine Learning Fundamentals"+nextSemester,"Pattern Recognition L3 in S(2)",

      ],
    },
    {
      id:5,
      title:"Introduction to Software Engineering",
      whichOPen:["Advanced Software Engineering L(3) in S(2)"],
    },
    {
      id:6,
      title:"Computer Networks Technology",
      whichOPen:["Networking Fundamentals lab","Information Computer Networks Security L(3) in S(2)",
        "Microcontroller L(3) in S(2)",
        "Ethical Hacking-lab L(3) in S(2)"],
    }
  ] ;

const dataCourses2 =[
{
id:1,
title:"Introduction to Operation Research	",
whichOPen:["not open Courses"],
},
{
id:2,
title:"Data Structure",
whichOPen:["Artificial intelligence"+nextSemester,"Operating Systems"+nextSemester,
  "Computer Organization"+nextSemester,"Algorithms analysis and Design"+nextSemester
],
},
{
id:3,
title:"Machine Learning Fundamentals",
whichOPen:["op-Natural Language Processing L(3) in S(2)"],
},
{
id:4,
title:"Web Technology",
whichOPen:["not open Courses"],
},
{
id:5,
title:"Entrepreneurship",
whichOPen:["not open Courses"],
},
{
id:6,
title:"Networking Fundamentals lab",
whichOPen:["Network Routing and Switching-Lab"+nextSemester],
}
];

  return (
    <div>
      <TableCourses  dataCourses1={dataCourses1} dataCourses2={dataCourses2}/>
      </div>
  )
}

export default page
