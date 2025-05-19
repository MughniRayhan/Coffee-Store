import React from 'react'
import Swal from 'sweetalert2'
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData } from 'react-router';

function UpdateCoffee() {
    const coffee = useLoaderData();
    const {_id, name, chef, photo, price,supplier,details,taste} = coffee;
      const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                Swal.fire({
                title: "Coffee updated successfully!",
                icon: "success",
                draggable: true
});
               // form.reset();
            }
           
        })
    }
  return (
    <div className=' bg-[url("https://i.ibb.co/PGs7WVtP/11.png")] bg-no-repeat md:px-[112px] pb-[120px] px-4'>
       <Link to='/' className='flex items-center gap-2 text-[#374151] text-2xl rancho py-[50px]'>
         <IoMdArrowBack/>
        <h3>Back to home</h3>
       </Link>
        <div className='max-w-7xl mx-auto md:px-[112px] px-4 py-[70px] bg-[#F4F3F0]'>
            <h1 className='text-4xl text-[#374151] text-center rancho text-shadow-lg/35'>Update Existing Coffee Details</h1>
            <p className='text-sm md:text-lg my-[32px] text-center text-[#1B1A1A]/[70%] w-[89%]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleUpdateCoffee} className='w-full'>
                <fieldset className="fieldset  w-full border-base-300 rounded-box  border p-4 grid grid-cols-1 md:grid-cols-2 gap-5 ">
                 
                 <div className='flex flex-col gap-4'> 
                 <label className="label text-[#1B1A1A]/[80%] text-base font-semibold">Name</label>
                 <input type="text" className="input w-full" name='name' placeholder="Enter coffee name" defaultValue={name}/>
                 </div>

                 <div className='flex flex-col gap-4'> 
                 <label className="label text-[#1B1A1A]/[80%] text-base font-semibold">Chef</label>
                 <input type="text"  className="input w-full"  name='chef' placeholder="Enter coffee chef" defaultValue={chef}/>
                 </div>

                  <div className='flex flex-col gap-4'> 
                 <label className="label text-[#1B1A1A]/[80%] text-base font-semibold">Supplier</label>
                 <input type="text"  className="input w-full"  name='supplier' placeholder="Enter coffee supplier" defaultValue={supplier}/>
                 </div>

                 <div className='flex flex-col gap-4'> 
                 <label className="label text-[#1B1A1A]/[80%] text-base font-semibold">Taste</label>
                 <input type="text"  className="input w-full"  name='taste' placeholder="Enter coffee taste" defaultValue={taste}/>
                 </div>

                 <div className='flex flex-col gap-4'> 
                 <label className="label text-[#1B1A1A]/[80%] text-base font-semibold">Price</label>
                 <input type="text"  className="input w-full"  name='price' placeholder="Enter coffee price" defaultValue={price}/>
                 </div>

                  <div className='flex flex-col gap-4'> 
                 <label className="label text-[#1B1A1A]/[80%] text-base font-semibold">Details</label>
                 <input type="text"  className="input w-full"  name='details' defaultValue={details} 
                 placeholder="Enter coffee details" />
                 </div>

                 
                 
 
</fieldset>
                <fieldset className='flex flex-col gap-4 '> 
                 <label className="label text-[#1B1A1A]/[80%] text-base font-semibold">Photo</label>
                 <input type="text"  className="input w-full "  placeholder="Enter photo URL" 
                 name='photo' defaultValue={photo}
                 />
                 </fieldset>

                 <input type="submit" className="w-full mt-5 bg-[#D2B48C] text-xl text-[#331A15] py-[12px] rounded-md cursor-pointer rancho border-2 border-[#331A15]"   value="Update Coffee Details" />
            </form>
        </div>
    </div>

  )
}
export default UpdateCoffee