"use client"

import Image from "next/image"
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
    price: "USD 19",
    image: "/images/rasm-1.png",
  },
  {
    id: 2,
    name: "Sofa & chair",
    price: "USD 99",
    image: "/images/image 94.png",
  },
  {
    id: 3,
    name: "Kitchen dishes",
    price: "USD 89",
    image: "/images/image 93.png",
  },
  {
    id: 4,
    name: "Smart watches",
    price: "USD 8",
    image: "/images/pot small.png",
  },
  {
    id: 5,
    name: "Cookware",
    price: "From USD 25",
    image: "/images/mixer.png",
  },
  {
    id: 6,
    name: "Kitchen liner",
    price: "USD 10",
    image: "/images/pot.png",
  },
  {
    id: 7,
    name: "Blenders",
    price: "USD 15",
    image: "/images/rasm-1.png",
  },
  {
    id: 8,
    name: "Home appliance",
    price: "From USD 9",
    image: "/images/rasm-1.png",
  },
  {
    id: 9,
    name: "Home Appliances",
    price: "From USD 10",
    image: "/images/rasm.png",
  },
  {
    id: 10,
    name: "Plants & decor",
    price: "From USD 15",
    image: "/images/plant.png",
  },
]

export default function HomeOutdoorShowcase() {
  return (
    <div className="bg-gray-100 mx-auto rounded-lg  mt-10 w-[1180px] border-1 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Promotional Section */}
        <div className="lg:w-1/3 bg-gradient-to-br from-amber-50 to-orange-100  lg:p-8 relative">
          <div className="absolute top-0  p-5">
                              <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] font-bold black">Home and</h4>
                              <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] mt-[0px] font-bold black">outdoor</h4>
          
                              <button className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors group">
                        Source now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                          </div>

          {/* Decorative Home Scene */}
          <div className="absolute bottom-0 right-0 lg:bottom-4 lg:right-4 w-32 h-24 lg:w-40 lg:h-32">
            <div className="relative w-full h-full">
              {/* Plant */}
              <div className="absolute bottom-0 right-8 w-8 h-16 bg-green-400 rounded-t-full opacity-80"></div>
              <div className="absolute bottom-0 right-10 w-6 h-12 bg-green-500 rounded-t-full opacity-60"></div>

              {/* Pot */}
              <div className="absolute bottom-0 right-8 w-10 h-6 bg-amber-600 rounded-b-lg"></div>

              {/* Decorative elements */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-amber-300 rounded-full opacity-70"></div>
              <div className="absolute bottom-6 right-16 w-3 h-3 bg-orange-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Right Products Grid */}
        <div className="lg:w-2/3  bg-white p-4 lg:p-6 border-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 ">
            {productCategories.map((category) => (
              <div key={category.id} className="group  cursor-pointer hover:bg-gray-50 rounded-lg p-3 transition-colors">
                <div className="flex flex-col  items-center text-center space-y-2">
                  {/* Product Image */}
                  <div className="relative w-12  h-12 lg:w-16 lg:h-16">
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



