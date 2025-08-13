



"use client"

import {
  Heart,
  Menu,
  ChevronDown,
  Grid3X3,
  List,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import Canon_Camera from "../../../public/images/iphone.png"
import mobile from "../../../public/images/mobile.png"
import tablet from "../../../public/images/tablet.png"
import labtop from "../../../public/images/laptop small.png"
import headphones from "../../../public/images/simple headphone.png"

import Link from "next/link"

export default function EcommerceWebsite() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-grey-50 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs sm:text-sm text-gray-600 flex flex-wrap gap-1">
            <span>Home</span>
            <span className="mx-1">{">"}</span>
            <span>Clothings</span>
            <span className="mx-1">{">"}</span>
            <span>Men's wear</span>
            <span className="mx-1">{">"}</span>
            <span className="text-gray-900">Summer Clothing</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Mobile Filter Toggle */}
        <div className="flex justify-between items-center mt-4 md:hidden">
          <Button variant="outline" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-4 w-4 mr-1" /> Filters
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {/* Sidebar */}
          <div
            className={`w-full md:w-64 flex-shrink-0 transition-all duration-300 ${
              sidebarOpen ? "block" : "hidden md:block"
            }`}
          >
            {/* Category */}
            <div className="mb-2 border-b">
              <div className="flex items-center justify-between mt-3 mb-3">
                <h3 className="font-semibold">Category</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-blue-500 cursor-pointer">Mobile accessory</div>
                <div className="text-sm text-gray-600 cursor-pointer">Electronics</div>
                <div className="text-sm text-gray-600 cursor-pointer">Smartphones</div>
                <div className="text-sm text-gray-600 cursor-pointer">Modern tech</div>
                <div className="text-sm text-blue-500 cursor-pointer">See all</div>
              </div>
            </div>

            {/* Brands */}
            <div className="mb-2 border-b">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Brands</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
                  <div className="flex items-center space-x-2" key={brand}>
                    <Checkbox id={brand.toLowerCase()} />
                    <Label htmlFor={brand.toLowerCase()} className="text-sm">
                      {brand}
                    </Label>
                  </div>
                ))}
                <div className="text-sm text-blue-500 cursor-pointer">See all</div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Features</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                {["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"].map((feature) => (
                  <div className="flex items-center space-x-2" key={feature}>
                    <Checkbox id={feature.toLowerCase()} />
                    <Label htmlFor={feature.toLowerCase()} className="text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
                <div className="text-sm text-blue-500 cursor-pointer">See all</div>
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Price range</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="space-y-4">
                <Slider defaultValue={[300]} max={1000} step={10} className="w-full" />
                <div className="flex gap-2">
                  <Input placeholder="Min" className="h-8 text-xs" />
                  <Input placeholder="Max" className="h-8 text-xs" />
                </div>
                <Button className="w-full h-8 text-xs bg-blue-500 hover:bg-blue-600">Apply</Button>
              </div>
            </div>

            {/* Condition */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Condition</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <RadioGroup defaultValue="any">
                {[
                  { value: "any", label: "Any" },
                  { value: "refurbished", label: "Refurbished" },
                  { value: "brand-new", label: "Brand new" },
                  { value: "old", label: "Old items" },
                ].map(({ value, label }) => (
                  <div className="flex items-center space-x-2" key={value}>
                    <RadioGroupItem value={value} id={value} />
                    <Label htmlFor={value} className="text-sm">
                      {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Ratings */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Ratings</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2].map((stars) => (
                  <div className="flex items-center space-x-2" key={stars}>
                    <Checkbox id={`${stars}star`} />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < stars ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center border bg-white p-3 mt-3 justify-between mb-4 gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-gray-600">
                  12,911 items in <strong>Mobile accessory</strong>
                </span>
                <div className="flex items-center gap-2">
                  <Checkbox id="verified" />
                  <Label htmlFor="verified" className="text-sm">
                    Verified only
                  </Label>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-1">
                  <Link href={"/thrPage"}>
                    <Button variant="outline" size="sm" className="p-1 bg-transparent">
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="p-1 bg-transparent">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[Canon_Camera, mobile, tablet, labtop, headphones].map((img, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  <Image src={img} alt="product" className="w-full sm:w-32 h-auto object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">Sample Product Name</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold">$998.00</span>
                      {idx % 2 === 0 && <span className="text-gray-500 line-through">$1128.00</span>}
                    </div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-orange-400 text-orange-400" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">7.5</span>
                      <span className="text-sm text-gray-600">154 orders</span>
                      <span className="text-sm text-green-600">Free Shipping</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Short product description goes here for better understanding of item.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-blue-500">
                      View details
                    </Button>
                  </div>
                  <Heart className="h-5 w-5 text-[#0D6EFD] cursor-pointer self-end sm:self-start" />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Select defaultValue="10">
                <SelectTrigger className="w-30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">Show 10</SelectItem>
                  <SelectItem value="20">Show 20</SelectItem>
                  <SelectItem value="50">Show 50</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-500 text-white">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
