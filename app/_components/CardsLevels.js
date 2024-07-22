
"use client"

import React from 'react'
import TableCourses from './TableCourses';
import Link from 'next/link';

function CardsLevels() {

  


  const urlimgLevel1 ="https://tse3.mm.bing.net/th?id=OIP.bl_7Nn87zvq2A9-_H0tVrgHaDL&pid=Api&P=0&h=220";
  const urlimgLevel2 ="https://tse2.mm.bing.net/th?id=OIP.O2ungnqPrf_0yQXpOAXxfQHaE7&pid=Api&P=0&h=220";
  const urlimgLevel3="https://viterbiadmission.usc.edu/wp-content/uploads/2018/08/CSCI-cover-photo-e1533659219474.jpg";
  const urlimgLevel4="https://live.staticflickr.com/65535/52947531969_97915762ea_b.jpg";
  const semester1= "1";
  const semester2 = "2";

 
 
  const Levels=[
    {
      id:1,
      title:"Level1",
      urlImage:urlimgLevel1
    },
    {
      id:2,
      title:"Level2",
      urlImage:urlimgLevel2,
    },
    {
      id:3,
      title:"Level3",
      urlImage:urlimgLevel3,
    },
    {
      id:4,
      title:"Level4",
      urlImage:urlimgLevel4,
    },
  ];
  const handleSemesterClick = (semester) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('semester', semester);
    }
  };



  
  return (
    
    <div className='row m-3 pb-10 pt-10'>
       <h2
       
       className='
         flex justify-center
       bg-gradient-to-r from-green-300 via-blue-500 
        to-purple-600 bg-clip-text text-3xl 
        text-[37px] mb-4
        font-extrabold text-transparent sm:text-5xl mb-16 '>LeVeLS</h2>
      <div className="grid grid-cols-2 gap-3">


      

                 <Link className="col-6 rounded-xl border border-gray-700 bg-gray-800 p-4
                 hover:border-teal-400" href="/Level1">
                 <div className="flex items-center gap-4">
                   <img
                     alt=""
                     src={urlimgLevel1}
                     className="size-16 rounded-full object-cover"
                   />
               
                   <div>
                     <h3 className="text-lg font-medium text-white">Level 1</h3>
               
                     <div className="flow-root">
                   
                     </div>
                   </div>
                 </div>
               
              
               </Link>
                 <Link className="col-6 rounded-xl border border-gray-700 bg-gray-800 p-4
                 hover:border-teal-400" href="/Level2">
                 <div className="flex items-center gap-4">
                   <img
                     alt=""
                     src={urlimgLevel2}
                     className="size-16 rounded-full object-cover"
                   />
               
                   <div>
                     <h3 className="text-lg font-medium text-white">Level 2</h3>
               
                     <div className="flow-root">
                   
                     </div>
                   </div>
                 </div>
              
               </Link>
                 <Link className="mt-8 col-6 rounded-xl border border-gray-700 bg-gray-800 p-4
                 hover:border-teal-400"
                 href="/Level3">
                 <div className="flex items-center gap-4">
                   <img
                     alt=""
                     src={urlimgLevel3}
                     className="size-16 rounded-full object-cover"
                   />
               
                   <div>
                     <h3 className="text-lg font-medium text-white">Level 3</h3>
               
                     <div className="flow-root">
                   
                     </div>
                   </div>
                 </div>
               
            
               </Link>
                 <Link
                 href="/Level4" className="
                 mt-8
                 col-6 rounded-xl border border-gray-700 bg-gray-800 p-4
                 hover:border-teal-400">
                 <div className="flex items-center gap-4">
                   <img
                     alt=""
                     src={urlimgLevel4}
                     className="size-16 rounded-full object-cover"
                   />
               
                   <div>
                     <h3 className="text-lg font-medium text-white">Level 4</h3>
               
                     <div className="flow-root">
                   
                     </div>
                   </div>
                 </div>
               
            
               </Link>
          
        
  



      </div>

    </div>
  )
}

export default CardsLevels;


