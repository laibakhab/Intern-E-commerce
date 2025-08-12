"use client"

import Image from "next/image"
import Image3 from "../../../public/images/image 107.png"
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
    name: "Smart watches",
    price: "USD 16",
    image: "/images/smartwatch.png",
  },
  {
    id: 2,
    name: "Cameras",
    price: "USD 89",
    image: "/images/smartwatch.png",
  },
  {
    id: 3,
    name: "Headphones",
    price: "USD 10",
    image: "/images/smartwatch.png",
  },
  {
    id: 4,
    name: "Smart watches",
    price: "USD 8",
    image: "/images/smartwatch.png",
  },
  {
    id: 5,
    name: "Coffee maker",
    price: "From USD 25",
    image: "/images/smartwatch.png",
  },
  {
    id: 6,
    name: "Gaming set",
    price: "USD 15",
    image: "/images/smartwatch.png",
  },
  {
    id: 7,
    name: "Laptops & PC",
    price: "USD 348",
    image: "/images/smartwatch.png",
  },
  {
    id: 8,
    name: "Smartphones",
    price: "USD 19",
    image: "/images/smartwatch.png",
  },
  
]

export default function ElectronicsShowcase() {
  return (
    <div className=" rounded-lg mx-auto mb-10 w-[1180px] h-[257px] border-1 mt-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Promotional Section */}
        <div className="relative">
          <div >
            <div className="relative">
                <Image 
                    src={Image3} 
                    alt='Image' 
                    className='w-[388px] h-[260px] ' 
                />
                <div className="absolute top-0  p-5">
                    <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] font-bold black">Home and</h4>
                    <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] mt-[0px] font-bold black">outdoor</h4>

                    <button className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors group">
              Source now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
                </div>
            </div>

            
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
            <div className="relative">
              <Image
                src={Image3}
                alt="Electronics gadgets"
                width={120}
                height={80}
                className="opacity-80"
              />
              {/* Pink Arrow */}
              <div className="absolute -top-2 -left-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-pink-500">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Products Grid */}
        <div className="lg:w-2/3 bg-white p-4 lg:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {productCategories.map((category) => (
              <div key={category.id} className="group cursor-pointer hover:bg-gray-50 rounded-lg p-3 transition-colors">
                <div className="flex flex-col items-center text-center space-y-2">
                  {/* Product Image */}
                  <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                    <div className="flex">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xs lg:text-sm font-medium text-gray-700 leading-tight line-clamp-2">
                    {category.name}
                  </h3>
                  </div>

                  {/* Price */}
                  <p className="text-xs text-gray-500 font-medium">{category.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
