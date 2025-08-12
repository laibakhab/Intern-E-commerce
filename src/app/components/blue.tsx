"use client"
import { Button } from "@/components/ui/button"


export default function ShoppingCartPage() {
  return (
    <div className="mt-6 w-[1180px] ml-[80px] mb-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">Super discount on more than 100 USD</h3>
                  <p className="text-blue-100">Have you ever finally just write dummy info</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Shop now</Button>
              </div>
            </div>
       
  )
}
