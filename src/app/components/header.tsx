


import { ShoppingBag, User, MessageCircle, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto flex items-center   border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto  flex items-center gap-30">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-blue-500 p-2 rounded-lg">
            <ShoppingBag className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-semibold text-blue-500">Brand</span>
        </div>

        {/* Search Section */}
        <div className="flex-1 max-w-2xl">
          <div className="flex">
            <div className="relative flex-1 ">
              <Input    
                type="text"
                placeholder="Search"
                className=" h-9 w-[350px] pr-4 border-r-0 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Select defaultValue="all" >
              <SelectTrigger className="w-[150px] h-10 rounded-none border-l-0  border-r-0 focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="All category" />
              </SelectTrigger>
              <SelectContent  >
                <SelectItem value="all" >All category</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="home">Home & Garden</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-9 px-6 rounded-l-none bg-blue-500 hover:bg-blue-600">Search</Button>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-xs text-gray-600">Profile</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
            <MessageCircle className="h-5 w-5 text-gray-600" />
            <span className="text-xs text-gray-600">Message</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
            <Heart className="h-5 w-5 text-gray-600" />
            <span className="text-xs text-gray-600">Orders</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors">
            <Link href="/lastPage">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            </Link>
            <span className="text-xs text-gray-600">My cart</span>
          </div>
        </div>
      </div>
    </header>
  )
}