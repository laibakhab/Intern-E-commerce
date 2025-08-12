"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Grid3X3, List, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "GoPro HERO6 4K Action Camera",
    price: 59.5,
    originalPrice: 79.5,
    rating: 4,
    image: "/images/smartwatch.png",
    category: "Camera",
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera",
    price: 59.5,
    originalPrice: 79.5,
    rating: 4,
    image: "/images/tablet.png",
    category: "Camera",
  },
  {
    id: 3,
    name: "Samsung HERO6 4K Action Camera",
    price: 89.5,
    rating: 5,
    image: "/images/pot.png",
    category: "Camera",
  },
  {
    id: 4,
    name: "GoPro HERO6 4K Action Camera",
    price: 59.5,
    originalPrice: 79.5,
    rating: 4,
    image: "/images/plant.png",
    category: "Camera",
  },
  {
    id: 5,
    name: "GoPro HERO6 4K Action Camera",
    price: 59.5,
    originalPrice: 79.5,
    rating: 4,
    image: "/images/mobile.png",
    category: "Camera",
  },
  {
    id: 6,
    name: "Samsung HERO6 4K Action Camera",
    price: 89.5,
    rating: 5,
    image: "/images/mixer.png",
    category: "Camera",
  },
  {
    id: 7,
    name: "GoPro HERO6 4K Action Camera",
    price: 59.5,
    originalPrice: 79.5,
    rating: 4,
    image: "/images/kettle.png",
    category: "Camera",
  },
  {
    id: 8,
    name: "GoPro HERO6 4K Action Camera",
    price: 59.5,
    originalPrice: 79.5,
    rating: 4,
    image: "/images/iphone.png",
    category: "Camera",
  },
  {
    id: 9,
    name: "Samsung HERO6 4K Action Camera",
    price: 89.5,
    rating: 5,
    image: "/images/image 93.png",
    category: "Camera",
  },
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
          <nav className="text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">{">"}</span>
            <span>Category</span>
            <span className="mx-2">{">"}</span>
            <span>Mobile accessory</span>
            <span className="mx-2">{">"}</span>
            <span className="text-gray-900">Samsung Mobiles</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg p-6 h-fit">
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
              <Button variant="link" className="text-blue-600 p-0 h-auto mt-2">
                See all
              </Button>
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
              <Button variant="link" className="text-blue-600 p-0 h-auto mt-2">
                See all
              </Button>
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

            {/* Condition */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Condition</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="new" />
                  <label htmlFor="new" className="text-sm cursor-pointer">
                    New
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="used" />
                  <label htmlFor="used" className="text-sm cursor-pointer">
                    Used
                  </label>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Ratings</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={`rating-${rating}`} />
                    <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="ml-1">& above</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Manufacturer */}
            <div>
              <h3 className="font-semibold mb-3">Manufacturer</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select manufacturer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="poco">Poco</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filters and View Toggle */}
            <div className="flex-1 ">
            {/* Results Header */}
            <div className="flex items-center border-1 bg-white p-3 mt-3 justify-between mb-4">
              <div className="flex items-center gap-4">
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
              <div className="flex items-center gap-4">
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
                  <Button variant="outline" size="sm" className="p-1 bg-transparent">
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Link href={"http://localhost:3000/secPage"}>
                  <Button variant="outline" size="sm" className="p-1 bg-transparent">
                    <List className="h-4 w-4" />
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          {/* Main Content */}
          <div className="flex-1">
            {/* Filters and View Toggle */}
            <div className="bg-grey-50 rounded-lg p-4 mb-6">
              <div className="flex items-center  justify-between ">
                <div className="flex items-center  gap-2 flex-wrap">
                  {selectedFilters.map((filter) => (
                    <Badge key={filter} variant="secondary" className="flex p-3 bg-white hover:border-blue-600 border-blue-300 w-25 text-[15px] items-center gap-1">
                      {filter}
                      <button onClick={() => removeFilter(filter)} className="ml-1 hover:text-red-600">
                        ×
                      </button>
                    </Badge>
                  ))}
                  {selectedFilters.length > 0 && (
                    <Button variant="link" onClick={clearAllFilters} className="text-blue-600 p-0 h-auto">
                      Clear all filter
                    </Button>
                  )}
                </div>
              </div>
            </div>

            





            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="relative mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={100}
                      className=" h-50 object-cover rounded-lg"
                    />
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">74</span>
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
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center  justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <Select defaultValue="10">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <span className="px-2">...</span>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
