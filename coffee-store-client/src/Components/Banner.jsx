import React from 'react'

function Banner() {
  return (
    <div className='bg-[url("https://i.ibb.co/Dgw4WDdn/3.png")] bg-cover bg-no-repeat flex sm:justify-end justify-center sm:py-[288px] py-[100px] sm:h-[800px] w-full px-4'>
        <div className='sm:w-[724px] w-full'>
            <h3 className='rancho text-white sm:text-4xl text-3xl'>Would you like a Cup of Delicious Coffee?</h3>
            <p className='sm:text-base text-sm text-white w-full my-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='btn bg-[#E3B577] py-4 px-8 text-[#242222] mt-4 mb-12 sm:text-xl text-base rancho'>Learn More</button>
        </div>
    </div>
  )
}

export default Banner