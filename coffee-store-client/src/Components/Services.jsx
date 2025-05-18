import React from 'react'

function Services() {
    const services = [
        {
            id: 1,
            image: "https://i.ibb.co/XZbgCcXW/1.png",
            title: "Awesome Aroma",
            description: "You will definitely be a fan of the design & aroma of your coffee"
           
        },
        {
            id: 2,
             image: "https://i.ibb.co/LdQGwdZp/2.png",
            title: "High Quality",
            description: "We served the coffee to you maintaining the best quality"
        },
        {
            id: 3,
            image: "https://i.ibb.co/RkP4bXcb/3.png",
            title: "Pure Grades",
            description: "The coffee is made of the green coffee beans which you will love"
        },
        {
            id: 4,
            image: "https://i.ibb.co/wNF0Zs9p/4.png",
            title: "Proper Roasting",
            description: "Your coffee is brewed by first roasting the green coffee beans"
        }
    ]
  return (
    <div className='w-full bg-[#ECEAE3] py-[56px] flex flex-wrap items-center justify-center gap-4 sm:px-16 px-5'>
        {
            services.map(service => (
                <div key={service.id} className='flex flex-col  gap-4 sm:w-[290px] w-full mx-auto'>
                    <img src={service.image} alt="service" className='sm:w-[70px] w-[48px]'/>
                    <h3 className='text-[#331A15] sm:text-2xl text-xl rancho'>{service.title}</h3>
                    <p className='text-[#1B1A1A] sm:text-base text-sm w-full'>{service.description}</p>
                </div>
            ))
        }
        
    </div>
  )
}

export default Services