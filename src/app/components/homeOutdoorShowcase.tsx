// "use client"

// import Image from "next/image"
// import Image3 from "../../../public/images/image 92.png"
// import { ArrowRight } from "lucide-react"

// interface ProductCategory {
//   id: number
//   name: string
//   price: string
//   image: string
// }

// const productCategories: ProductCategory[] = [
//   {
//     id: 1,
//     name: "Soft chairs",
//     price: "USD 19",
//     image: "/images/rasm-1.png",
//   },
//   {
//     id: 2,
//     name: "Sofa & chair",
//     price: "USD 99",
//     image: "/images/image 94.png",
//   },
//   {
//     id: 3,
//     name: "Kitchen dishes",
//     price: "USD 89",
//     image: "/images/image 93.png",
//   },
//   {
//     id: 4,
//     name: "Smart watches",
//     price: "USD 8",
//     image: "/images/pot small.png",
//   },
//   {
//     id: 5,
//     name: "Cookware",
//     price: "From USD 25",
//     image: "/images/mixer.png",
//   },
//   {
//     id: 6,
//     name: "Kitchen liner",
//     price: "USD 10",
//     image: "/images/pot.png",
//   },
//   {
//     id: 7,
//     name: "Blenders",
//     price: "USD 15",
//     image: "/images/rasm-1.png",
//   },
//   {
//     id: 8,
//     name: "Home appliance",
//     price: "From USD 9",
//     image: "/images/rasm-1.png",
//   },
//   {
//     id: 9,
//     name: "Home Appliances",
//     price: "From USD 10",
//     image: "/images/rasm.png",
//   },
//   {
//     id: 10,
//     name: "Plants & decor",
//     price: "From USD 15",
//     image: "/images/plant.png",
//   },
// ]

// export default function HomeOutdoorShowcase() {
//   return (
//     <div className="bg-gray-100 flex mx-auto rounded-lg  mt-10 w-[1180px] border-1 overflow-hidden">
      
                          

//           {/* Decorative Home Scene */}


//           <div className="relative ">
//             <div><Image 
//         src={Image3} 
//         alt='Image' 
//         className='w-[280px] h-[257px] ' 
//     />
//     </div>
//     <div className="absolute top-0  p-5">
//                               <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] font-bold black">Home and</h4>
//                               <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] mt-[0px] font-bold black">outdoor</h4>
          
//                               <button className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors group">
//                         Source now
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                           </div>

//           </div>








          

//         {/* Right Products Grid */}
//         <div className="lg:w-2/3  bg-white p-4 lg:p-6 border-1">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 ">
//             {productCategories.map((category) => (
//               <div key={category.id} className="group  cursor-pointer hover:bg-gray-50 rounded-lg p-3 transition-colors">
//                 <div className="flex flex-col  items-center text-center space-y-2">
//                   {/* Product Image */}
//                   <div className="relative w-12  h-12 lg:w-16 lg:h-16">
//                     <Image
//                       src={category.image || "/placeholder.svg"}
//                       alt={category.name}
//                       fill
//                       className="object-contain group-hover:scale-105 transition-transform"
//                     />
//                   </div>

//                   {/* Product Name */}
//                   <h3 className="text-xs lg:text-sm font-medium text-gray-700 leading-tight line-clamp-2">
//                     {category.name}
//                   </h3>

//                   {/* Price */}
//                   <p className="text-xs text-gray-500 font-medium">{category.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//   )
// }



"use client"

import Image from "next/image"
import BannerImage from "../../../public/images/image 92.png"
import { ArrowRight } from "lucide-react"

interface ProductCategory {
  id: number
  name: string
  price: string
  image: string
}

const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Soft chairs",
    price: "From USD 19",
    image: "/images/rasm-1.png",
  },
  {
    id: 2,
    name: "Sofa & chair",
    price: "From USD 19",
    image: "/images/image 94.png",
  },
  {
    id: 3,
    name: "Kitchen dishes",
    price: "From USD 19",
    image: "/images/image 93.png",
  },
  {
    id: 4,
    name: "Smart watches",
    price: "From USD 19",
    image: "/images/pot small.png",
  },
  {
    id: 5,
    name: "Kitchen mixer",
    price: "From USD 100",
    image: "/images/mixer.png",
  },
  {
    id: 6,
    name: "Blenders",
    price: "From USD 39",
    image: "/images/blender.png",
  },
  {
    id: 7,
    name: "Home appliance",
    price: "From USD 19",
    image: "/images/rasm.png",
  },
  {
    id: 8,
    name: "Coffee maker",
    price: "From USD 10",
    image: "/images/plant.png",
  },
]

export default function HomeOutdoorShowcase() {
  return (
    <div className="bg-white flex mx-auto rounded-lg mt-10 w-[1180px] border  overflow-hidden h-[257px]">
      
      {/* Left Banner Section */}
      <div className="relative w-[280px] h-[257px]">
        <Image 
          src={BannerImage} 
          alt='Banner' 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 p-5 space-y-4">
          <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] font-bold text-gray-900">Home and</h4>
          <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] font-bold text-gray-900 -mt-2">outdoor</h4>
          <button className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors group">
            Source now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Right Product Grid Section */}
      <div className="flex-1 bg-white p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-full">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-white hover:bg-gray-50 rounded-lg p-3 flex justify-between items-center h-[100px] transition-colors"
            >
              {/* Left: Title and Price */}
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-800">{category.name}</h3>
                <p className="text-xs text-gray-500 font-medium">{category.price}</p>
              </div>

              {/* Right: Product Image */}
              <div className="relative w-16 h-16">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
