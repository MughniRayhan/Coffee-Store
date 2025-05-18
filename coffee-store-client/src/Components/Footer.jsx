import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
  return (
        <footer>
            <div className='bg-[url("https://i.ibb.co/YFdcb8z5/13.jpg")] bg-cover  bg-no-repeat py-18  md:px-20 px-10 w-full'>
         <div className='flex flex-col md:flex-row justify-between items-center md:max-w-7xl mx-auto w-full gap-8'>

            <div className='md:w-1/2 w-full'>
        <img src="https://i.ibb.co/FLCvbPhx/logo1.png" alt="logo" className='sm:w-[75px] w-[48px]'/>
        <h3 className='rancho sm:text-[45px] text-3xl text-[#331A15]'>Espresso Emporium</h3>
        <p className='sm:text-xl text-[#]1B1A1A] '>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
        <div className='flex gap-2 my-5 text-[#331A15] text-3xl'>
<FaFacebook />
<FaGithub/>
<FaInstagram/>
<FaLinkedin/>
        </div>
        <h3 className='rancho sm:text-[45px] text-3xl text-[#331A15]'>Get in Touch</h3>
        <div className='flex flex-col gap-4 mt-3 text-base sm:text-xl'>
            <p className=' text-[#]1B1A1A] flex gap-3 items-center'><FaPhoneAlt className='text-[#331A15] '/><span>+88 01746423366</span></p>
             <p className='text-[#]1B1A1A] flex gap-3 items-center'><MdEmail className='text-[#331A15] '/><span>mughnirayhan22@gmail.com</span></p>
             <p className=' text-[#]1B1A1A] flex gap-3 items-center'><FaLocationDot className='text-[#331A15] '/><span>Baruthkhana Point,Sylhet</span></p>
        </div>
       </div>

            <div className=' md:w-1/2 w-full'>
            
             <h3 className='rancho sm:text-[45px] text-3xl text-[#331A15]'>Connect with Us</h3>
             <div className='flex flex-col gap-4 mt-4'>
                <input className='bg-white w-full p-2 rounded-md' type="text" placeholder='Name'/>
                <input className='bg-white w-full p-2 rounded-md' type="email" placeholder='Email'/>
                <textarea className='bg-white w-full p-2 rounded-md' type="text" placeholder='Message'/>
             </div>
            
            
            
            </div>
         </div>
        
            </div>
            <div className='bg-[url("https://i.ibb.co/h1g3Tbm1/24.jpg")] bg-cover bg-no-repeat  p-4'>
             <p className='text-center text-white text-base'> Copyright © 2025 -  <span className='text-xl  rancho'> All right reserved by Espresso Emporium</span></p>
            </div>
        </footer>
  )
}

export default Footer