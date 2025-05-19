import React from 'react'
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

function CoffeCard({coffee,coffees,setCoffees}) {
  const {_id,name, chef, photo, price} = coffee;

  const handleDelete = (id) => {

   Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/coffees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount) {
       Swal.fire({
      title: "Deleted!",
      text: "Your Coffee has been deleted.",
      icon: "success"
    });

    const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
    setCoffees(remainingCoffees);
      }
    })
   
  }
});

  }
  return (
    
            <div className='flex flex-col md:flex-row justify-between items-center bg-[#F5F4F1] p-[30px] rounded-xl gap-5'>
            <img src={photo} alt="" className='w-[185px]'/>
            <div className='flex flex-col gap-4 items-start'>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Name:</span> {name}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Cheif:</span>{chef}</p>
                <p className='text-xl text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Price:</span>{price}</p>
            </div>

            <div className='flex md:flex-col gap-4'>
              <Link to={`/coffees/${_id}`}><div className='bg-[#D2B48C] p-3 text-white rounded'><IoEye /></div></Link>
              <Link to={`/update/${_id}`}> <div  className='bg-[#3C393B] p-3 text-white rounded'><MdEdit/></div></Link>
               <div  className='bg-[#EA4744] p-3 text-white rounded' onClick={()=>handleDelete(_id)}><MdDelete/></div>
            </div>
           
    </div>
  )
}

export default CoffeCard