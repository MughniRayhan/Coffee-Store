import React from 'react'

function Header() {
  return (
    <div>
      <nav className='w-full bg-[url("https://i.ibb.co/ZRnQtXM3/15.jpg")] bg-cover bg-no-repeat py-4 text-center px-4'>
       <div className=' mx-auto flex justify-center items-center sm:gap-4 gap-2'>
        <img src="https://i.ibb.co/FLCvbPhx/logo1.png" alt="logo" className='sm:w-[75px] w-[48px]'/>
        <h3 className='rancho sm:text-[60px] text-3xl text-white'>Espresso Emporium</h3>
       </div>
      </nav>
    </div>
  )
}

export default Header