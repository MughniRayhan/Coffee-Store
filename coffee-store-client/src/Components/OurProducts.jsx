import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router';
import CoffeCard from './CoffeCard';
import { VscCoffee } from "react-icons/vsc";

function OurProducts() {
     const initialCoffees = useLoaderData();
     const [coffees, setCoffees] =useState(initialCoffees);
  return (
    <div className='bg-[url("https://i.ibb.co/DDbFHfvk/1.png")] bg-cover bg-no-repeat '>
        <div className='mt-[120px] text-center max-w-7xl mx-auto p-4'>
            <p className='text-center text-[#1B1A1A]'>--- Sip & Savor ---</p>
            <h3 className='text-[#331A15] md:text-[55px] text-3xl text-center rancho text-shadow-lg/50'>Our Popular Products</h3>
           <Link to='/add'> <button className='btn bg-[#E3B577] py-4 px-8 text-white mt-4 mb-12 text-2xl
           rancho border-2 border-[#331A15] text-shadow-lg/25 hover:bg-transparent '>
           <span>Add Coffee</span> 
           <VscCoffee className='text-2xl text-[#331A15] ml-2'/>
            </button></Link>
          <div  className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
            {
              coffees.map(coffee => (
                <CoffeCard key={coffee._id} coffee={coffee} setCoffees={setCoffees} coffees={coffees}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default OurProducts