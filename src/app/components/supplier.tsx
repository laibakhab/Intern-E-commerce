// // import React from 'react';
// import Image from 'next/image';
// import Image3 from "../../../public/images/Rectangle 299.png"
// import { ChevronDown } from 'lucide-react';
// // import { Button } from '@/components/ui/button';


// const SupplierRequestForm = () => {
//   return (

// <div className="relative  p-4 md:p-6 lg:p-8 max-w-7xl mx-auto flex items-center gap-6">
//   {/* Background Image */}
//   <Image 
//     src={Image3} 
//     alt="Image" 
//     className="w-[1189px] h-[446px] rounded-lg mt-5 object-cover"
//   />

//   {/* Text Section */}
//   <div className="absolute top-0 mt-20 ml-10 left-0 p-8">
//     <h1 className="text-[32px] w-[400px] leading-[40px] font-semibold text-white">
//       An easy way to send requests to all suppliers
//     </h1>
//     <p className="text-[16px] w-[390px] leading-[20px] text-white mt-2">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
//     </p>
//   </div>

//   {/* Form Section */}
//   <div className="absolute top-22 mt-3 ml-[660px] bg-white p-4 w-[491px] h-[350px] rounded-lg shadow-lg">
//     <h2 className="text-[23px] font-bold text-black mb-4">Send quote to suppliers</h2>
    
//     <div className="space-y-4">
//       <div>
//         <input 
//           type="text" 
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter item name"
//         />
//       </div>

//       <div>
//         <textarea 
//           rows={3}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Add specifications, requirements, etc."
//         />
//       </div>

//       <div>
//         <div className="flex items-center">
//           <input 
//             type="number" 
//             className="w-50 px-3 py-2 border border-gray-300 rounded-lg "
//             placeholder="Quantity"
//           />
          

//           <div className="relative w-32 ml-5">
//   <input 
//     type="number" 
//     className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg pr-8" // pr-8 for icon space
//     placeholder="Pcs"
//   />
//   <ChevronDown className="h-5 w-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
// </div>

          
//         </div>
//       </div>
//     </div>

//     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 mt-4">
//       Send inquiry
//     </button>
//   </div>
// </div>
//   )
// }

// export default SupplierRequestForm;
import Image from 'next/image';
import Image3 from "../../../public/images/Rectangle 299.png"
import { ChevronDown } from 'lucide-react';

const SupplierRequestForm = () => {
  return (
    <div className="relative max-w-7xl mx-auto mt-5">
      {/* Background Image */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]">
        <Image
          src={Image3}
          alt="Background"
          fill
          className="object-cover rounded-lg"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg" />

        {/* Text + Form Container */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between p-4 md:p-8">
          
          {/* Text Section */}
          <div className="text-center md:text-left max-w-md mb-6 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug">
              An easy way to send requests to all suppliers
            </h1>
            <p className="text-sm md:text-base text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white p-4 sm:p-6 w-full sm:w-[450px] rounded-lg shadow-lg">
            <h2 className="text-lg md:text-xl font-bold text-black mb-4">
              Send quote to suppliers
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter item name"
              />

              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Add specifications, requirements, etc."
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="number"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Quantity"
                />

                <div className="relative flex-1">
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md pr-8"
                    placeholder="Pcs"
                  />
                  <ChevronDown className="h-5 w-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-4 transition duration-200">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierRequestForm;
