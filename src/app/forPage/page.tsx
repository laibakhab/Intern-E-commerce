"use client"

import Image from "next/image"
import { ChevronRight, Check, Star, Heart, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ShoppingCartPage from "../components/blue"


export default function ProductDetailPage() {
  const productImages = [
    "/images/image 34.png",
    "/images/image 35.png",
    "/images/image 40.png",
    "/images/image 36.png",
    "/images/image 37.png",
    "/images/image 34.png",
  ]

  const relatedProducts = [
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/images/wallet.png" },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/images/smartwatch.png" },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/images/simple headphone.png" },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/images/Bitmap.png" },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/images/kettle small.png" },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/images/rasm.png" },
  ]

  const youMayLike = [
    { name: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", image: "/images/blazer.png" },
    { name: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", image: "/images/Bitmap-1.png" },
    { name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", image: "/images/2 1.png" },
    { name: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", image: "/images/2 1.png" },
    {
      name: "New Summer Men's castrol T-Shirts",
      price: "$7.00 - $99.50",
      image: "/images/backpack.png",
    },
  ]

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-white w-full border-b">
        <div className="max-w-7xl mx-auto  px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Clothings</span>
            <ChevronRight className="w-4 h-4" />
            <span>Men's wear</span>
            <ChevronRight className="w-4 h-4" />
            <span>Summer clothing</span>
          </nav>
        </div>
      </div>

      <div className="w-[1180px]   mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
          {/* Main Product Section */}
          <div className="lg:col-span-2 border-1 flex w-[1180px] rounded-[10px]">
            <div className="bg-white rounded-lg  p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src="/images/image 34.png"
                        alt="Gray Polo Shirt"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain rounded-lg bg-white"
                    />

                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {productImages.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-100 rounded border-2 border-transparent hover:border-blue-500 cursor-pointer overflow-hidden"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={image}
                          width={60}
                          height={60}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4 ">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 text-sm font-medium">In stock</span>
                  </div>

                  <h1 className="text-xl font-semibold text-gray-900">
                    Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                  </h1>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-sm font-medium ml-1">9.3</span>
                    </div>
                    <span className="text-sm text-gray-500">32 reviews</span>
                    <span className="text-sm text-gray-500">154 sold</span>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-500">$98.00</div>
                        <div className="text-xs text-gray-500">50-100 pcs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">$90.00</div>
                        <div className="text-xs text-gray-500">100-700 pcs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">$78.00</div>
                        <div className="text-xs text-gray-500">700+ pcs</div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Table */}
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-gray-500">Price:</span>
                      <span>Negotiable</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-gray-500">Type:</span>
                      <span>Classic shoes</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-gray-500">Material:</span>
                      <span>Plastic material</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-gray-500">Design:</span>
                      <span>Modern nice</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-gray-500">Customization:</span>
                      <span>Customized logo and design custom packages</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-gray-500">Protection:</span>
                      <span>Refund Policy</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="text-gray-500">Warranty:</span>
                      <span>2 years full warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
            
              <CardContent className=" p-3 w-[280px] mr-5 mt-5 h-[325px] rounded-[10px] border-1">
                <div className="flex items-start gap-3 mt-[40px] mb-7">
                  <Avatar className="w-10 h-10 bg-blue-100">
                    <AvatarFallback className="text-blue-600 font-semibold">R</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <div className="text-sm text-gray-500">Supplier</div>
                    <div className="font-medium">Guangjoi Trading LLC</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm mt-[40px] ">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icon.png"
                      alt="Germany"
                      width={24}
                      height={16}
                      className="rounded"
                    />
                    <span className="text-gray-600">Germany, Berlin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600 ">Worldwide shipping</span>
                  </div>
                </div>

                <div className="space-y-2 mt-[15px]  ">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Inquiry</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Seller's profile
                  </Button>
                </div>

                
              </CardContent>
            
            <Button variant="ghost" className="w-full  text-blue-600">
                  <Heart className="w-4 h-4 mr-2" />
                  Save for later
                </Button>
            </div>
            
          </div>

          {/* Supplier Info Sidebar */}
          <div className="space-y-4 ">
            {/* Supplier Card */}
            

            {/* You may like */}
            
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className=" bg-white flex mt-5 rounded-lg">
          <div className="border-1 rounded-lg">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-transparent border-b rounded-none h-auto p-0">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
              >
                Shipping
              </TabsTrigger>
              <TabsTrigger
                value="seller"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
              >
                About seller
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="p-6">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                {/* Specifications Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 py-2 border-b">
                      <span className="font-medium">Model</span>
                      <span className="text-gray-600">#8786867</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-2 border-b">
                      <span className="font-medium">Style</span>
                      <span className="text-gray-600">Classic style</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-2 border-b">
                      <span className="font-medium">Certificate</span>
                      <span className="text-gray-600">ISO-898921212</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 py-2 border-b">
                      <span className="font-medium">Size</span>
                      <span className="text-gray-600">34mm x 450mm x 15mm</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-2 border-b">
                      <span className="font-medium">Memory</span>
                      <span className="text-gray-600">36GB RAM</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Some great feature name here</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Lorem ipsum dolor sit amet, consectetur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Duis aute irure dolor in reprehenderit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Some great feature name here</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="p-6">
              <div className="text-center text-gray-500">Reviews content would go here</div>
            </TabsContent>

            <TabsContent value="shipping" className="p-6">
              <div className="text-center text-gray-500">Shipping information would go here</div>
            </TabsContent>

            <TabsContent value="seller" className="p-6">
              <div className="text-center text-gray-500">Seller information would go here</div>
            </TabsContent>
          </Tabs>
          </div>
          <div className="ml-5 ">
          <Card className=" ">
              <CardContent className="p-4 w-[280px]">
                <h3 className="font-medium mb-3">You may like</h3>
                <div className="space-y-3">
                  {youMayLike.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>

        </div>

        {/* Related Products */}
        <div className="mt-8 bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Related products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        
      </div>
      <ShoppingCartPage/>
    </div>
  )
}



