import React from 'react'
import { Link } from 'react-router'
import { IoMdArrowBack } from 'react-icons/io'

function ErrorPage() {
  return (
    <div className=' bg-[url("https://i.ibb.co/PGs7WVtP/11.png")] bg-no-repeat md:px-[112px] pb-[120px] text-center'>
       <Link to='/' className='flex items-center justify-center gap-2 text-[#374151] text-2xl rancho py-[50px]'>
         <IoMdArrowBack/>
        <h3 >Back to home</h3>
       </Link>
       <div className='  max-w-7xl mx-auto  '>
        <img src="https://i.ibb.co/1GvcyMm6/404.gif" alt="" className='w-full h-[800px]'/>
       </div>
       
       </div>
  )
}

export default ErrorPage