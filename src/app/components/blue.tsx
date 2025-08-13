

"use client"
import { Button } from "@/components/ui/button"

export default function ShoppingCartPages() {
  return (
    <div className="mt-6 w-full max-w-[1180px] mx-auto mb-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 text-center md:text-left">
        
        {/* Text Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-1">
            Super discount on more than 100 USD
          </h3>
          <p className="text-sm md:text-base text-blue-100">
            Have you ever finally just write dummy info
          </p>
        </div>

        {/* Button */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 w-full md:w-auto">
          Shop now
        </Button>
      </div>
    </div>
  )
}
