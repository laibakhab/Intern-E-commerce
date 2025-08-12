// import React from 'react';
import Image from 'next/image';
import Image3 from "@/app/assests/images/Banner-board-800x420 2.png"
import { ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';


const SupplierRequestForm = () => {
  return (

<div className="relative  p-4 md:p-6 lg:p-8 max-w-7xl mx-auto flex items-center gap-6">
  {/* Background Image */}
  <Image 
    src={Image3} 
    alt="Image" 
    className="w-[1189px] h-[446px] rounded-lg mt-5 object-cover"
  />

  {/* Text Section */}
  <div className="absolute top-0 mt-20 ml-10 left-0 p-8">
    <h1 className="text-[32px] w-[400px] leading-[40px] font-semibold text-white">
      An easy way to send requests to all suppliers
    </h1>
    <p className="text-[16px] w-[390px] leading-[20px] text-white mt-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
    </p>
  </div>

  {/* Form Section */}
  <div className="absolute top-22 mt-3 ml-[660px] bg-white p-4 w-[491px] h-[350px] rounded-lg shadow-lg">
    <h2 className="text-[23px] font-bold text-black mb-4">Send quote to suppliers</h2>
    
    <div className="space-y-4">
      <div>
        <input 
          type="text" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter item name"
        />
      </div>

      <div>
        <textarea 
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add specifications, requirements, etc."
        />
      </div>

      <div>
        <div className="flex items-center">
          <input 
            type="number" 
            className="w-50 px-3 py-2 border border-gray-300 rounded-lg "
            placeholder="Quantity"
          />
          

          <div className="relative w-32 ml-5">
  <input 
    type="number" 
    className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg pr-8" // pr-8 for icon space
    placeholder="Pcs"
  />
  <ChevronDown className="h-5 w-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
</div>

          
        </div>
      </div>
    </div>

    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 mt-4">
      Send inquiry
    </button>
  </div>
</div>
  )
}

export default SupplierRequestForm;
