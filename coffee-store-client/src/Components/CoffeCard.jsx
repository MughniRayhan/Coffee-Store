import React from 'react'
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function CoffeCard({coffee}) {
  const {name, chef, supplier, taste, photo, price} = coffee;
  return (
    
            <div className='flex flex-col md:flex-row justify-between items-center bg-[#F5F4F1] p-[30px] rounded-xl gap-5'>
            <img src={photo} alt="" className='w-[185px]'/>
            <div className='flex flex-col gap-4 items-start'>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Name:</span> {name}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Cheif:</span>{chef}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Price:</span>{price}</p>
            </div>

            <div className='flex md:flex-col gap-4'>
                <div className='bg-[#D2B48C] p-3 text-white rounded'><IoEye /></div>
               <div  className='bg-[#3C393B] p-3 text-white rounded'><MdEdit/></div>
               <div  className='bg-[#EA4744] p-3 text-white rounded'><MdDelete/></div>
            </div>
           
    </div>
  )
}

export default CoffeCard