"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProductCard {
  id: number
  name: string
  image: string
  discount: string
}

const products: ProductCard[] = [
  {
    id: 1,
    name: "Smart watches",
    image:
      "/images/smartwatch.png", 
    discount: "-26%",
  },
  {
    id: 2,
    name: "Laptops",
    image: "/images/laptop.png", // ✅ fixed path
    discount: "-40%",
  },
  {
    id: 3,
    name: "GoPro cameras",
    image: "/images/camera.png",
    discount: "-40%",
  },
  {
    id: 4,
    name: "Headphones",
    image: "/images/headphone.png",
    discount: "-25%",
  },
  {
    id: 5,
    name: "Canon cameras",
    image: "/images/camera small.png",
    discount: "-35%",
  },
]

export default function DealsOffers() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <div className="bg-white border-1 rounded-lg p-6 mx-auto w-[1180px] mt-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        {/* Header and Timer */}
        {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
          <h2 className="text-xl  font-semibold whitespace-nowrap">Deals and offers </h2>

          <div className="flex items-center gap-2">
            <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
              {formatTime(timeLeft.days)}
            </div>
            <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
              {formatTime(timeLeft.hours)}
            </div>
            <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
              {formatTime(timeLeft.minutes)}
            </div>
            <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
              {formatTime(timeLeft.seconds)}
            </div>
          </div>
        </div> */}


        <div className="flex flex-col items-center gap-4 lg:gap-6">
  <h2 className="text-xl font-semibold whitespace-nowrap">Deals and offers</h2>
  <h2 className="text-[16px] text-[#8B96A5] leading-[0px] ">Hygiene equipments</h2>

  <div className="flex items-center gap-2">
    <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
      {formatTime(timeLeft.days)}
    </div>
    <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
      {formatTime(timeLeft.hours)}
    </div>
    <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
      {formatTime(timeLeft.minutes)}
    </div>
    <div className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-mono min-w-[32px] text-center">
      {formatTime(timeLeft.seconds)}
    </div>
  </div>
</div>


        {/* Products Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                    <Image
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-medium text-gray-700 leading-tight">
                    {product.name}
                  </h3>

                  {/* Discount */}
                  <span className="text-red-500 font-semibold text-sm">
                    {product.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}