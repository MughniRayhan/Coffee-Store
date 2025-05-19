import React from 'react'
import { Link, useLoaderData } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";

function CoffeeDetails() {
    const coffee = useLoaderData();
    const {_id, name, chef, photo, price,supplier,details,taste} = coffee;
  return (
    <div  className=' bg-[url("https://i.ibb.co/PGs7WVtP/11.png")] bg-no-repeat md:px-[112px] pb-[120px]'>
         <Link to='/' className='flex items-center gap-2 text-[#374151] text-2xl rancho py-[50px]'>
         <IoMdArrowBack/>
        <h3>Back to home</h3>
       </Link>
       <div  className='max-w-7xl mx-auto md:px-[112px] py-[70px] bg-[#F4F3F0] flex flex-col sm:flex-row gap-10 justify-center items-center'>
            <img src={photo} alt="" className='w-[315px] '/>
            <div className='flex flex-col gap-2'>
                <h3 className='rancho text-[#331A15] text-3xl mb-4 text-shadow-lg/25'>Niceties</h3>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A] mr-2'>Name:</span> {name}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A] mr-2'>Cheif:</span>{chef}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A] mr-2'>Supplier:</span> {supplier}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A] mr-2'>Taste:</span>{taste}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A] mr-2'>Price:</span>{price}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A] mr-2'>Details:</span>{details}</p>
            </div>
       </div>
    </div>
  )
}

export default CoffeeDetails