"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Grid3X3, List, Star, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"

const products = [
  { id: 1, name: "GoPro HERO6 4K Action Camera", price: 59.5, originalPrice: 79.5, rating: 4, image: "/images/iphone.png", category: "Camera" },
  { id: 2, name: "GoPro HERO6 4K Action Camera", price: 59.5, originalPrice: 79.5, rating: 4, image: "/images/image 22.png", category: "Camera" },
  { id: 3, name: "Samsung HERO6 4K Action Camera", price: 89.5, rating: 5, image: "/images/mobile.png", category: "Camera" },
  { id: 4, name: "GoPro HERO6 4K Action Camera", price: 59.5, originalPrice: 79.5, rating: 4, image: "/images/tablet.png", category: "Camera" },
  { id: 5, name: "GoPro HERO6 4K Action Camera", price: 59.5, originalPrice: 79.5, rating: 4, image: "/images/camera.png", category: "Camera" },
  { id: 6, name: "Samsung HERO6 4K Action Camera", price: 89.5, rating: 5, image: "/images/image 22.png", category: "Camera" },
  { id: 7, name: "GoPro HERO6 4K Action Camera", price: 59.5, originalPrice: 79.5, rating: 4, image: "/images/laptop small.png", category: "Camera" },
  { id: 8, name: "GoPro HERO6 4K Action Camera", price: 59.5, originalPrice: 79.5, rating: 4, image: "/images/smartwatch small.png", category: "Camera" },
  { id: 9, name: "Samsung HERO6 4K Action Camera", price: 89.5, rating: 5, image: "/images/iphone.png", category: "Camera" },
]

const brands = [
  { name: "Samsung", count: 12, checked: true },
  { name: "Apple", count: 8, checked: false },
  { name: "Poco", count: 5, checked: true },
  { name: "Lenovo", count: 3, checked: false },
]

const features = [
  { name: "Metallic", checked: true },
  { name: "Plastic cover", checked: false },
  { name: "8GB Ram", checked: false },
  { name: "Super power", checked: false },
  { name: "Large Memory", checked: false },
]

export default function ProductListing() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedFilters, setSelectedFilters] = useState(["Samsung", "Apple", "Poco", "Metallic", "5 star"])
  const [showFilters, setShowFilters] = useState(false)

  const removeFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600 flex flex-wrap gap-1">
            <span>Home</span>
            <span className="mx-1">{">"}</span>
            <span>Category</span>
            <span className="mx-1">{">"}</span>
            <span>Mobile accessory</span>
            <span className="mx-1">{">"}</span>
            <span className="text-gray-900">Samsung Mobiles</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - collapsible on mobile */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-64 bg-white rounded-lg p-6 h-fit`}>
            {/* Category */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Category</h3>
              <Select defaultValue="mobile-accessory">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mobile-accessory">Mobile accessory</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="headphones">Headphones</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand.name} className="flex items-center space-x-2">
                    <Checkbox id={brand.name} defaultChecked={brand.checked} />
                    <label htmlFor={brand.name} className="text-sm flex-1 cursor-pointer">
                      {brand.name}
                    </label>
                    <span className="text-xs text-gray-500">{brand.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Features</h3>
              <div className="space-y-2">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center space-x-2">
                    <Checkbox id={feature.name} defaultChecked={feature.checked} />
                    <label htmlFor={feature.name} className="text-sm cursor-pointer">
                      {feature.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Price range</h3>
              <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="mb-2" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile filter toggle */}
            <div className="flex justify-between items-center lg:hidden mb-4">
              <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="w-4 h-4 mr-1" /> Filters
              </Button>
            </div>

            {/* Selected filters */}
            <div className="bg-white rounded-lg p-4 mb-6 flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                  {filter}
                  <button onClick={() => removeFilter(filter)} className="ml-1 hover:text-red-600">
                    ×
                  </button>
                </Badge>
              ))}
              {selectedFilters.length > 0 && (
                <Button variant="link" onClick={clearAllFilters} className="text-blue-600 p-0 h-auto">
                  Clear all
                </Button>
              )}
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="relative mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-gray-600">Camera - Black</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
