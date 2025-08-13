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
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Clothings</span>
            <ChevronRight className="w-4 h-4" />
           <span>Men&apos;s wear</span>
            <ChevronRight className="w-4 h-4" />
            <span>Summer clothing</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left content */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Product section */}
            <div className="bg-white rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/image 34.png"
                      alt="Gray Polo Shirt"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {productImages.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-100 rounded border hover:border-blue-500 cursor-pointer overflow-hidden"
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
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 text-sm font-medium">In stock</span>
                  </div>

                  <h1 className="text-xl font-semibold text-gray-900">
                    Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                  </h1>

                  {/* Rating */}
                  <div className="flex flex-wrap items-center gap-4">
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
                  <div className="flex flex-wrap gap-4">
                    {[
                      { price: "$98.00", qty: "50-100 pcs", color: "text-red-500" },
                      { price: "$90.00", qty: "100-700 pcs" },
                      { price: "$78.00", qty: "700+ pcs" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-lg font-bold ${item.color || ""}`}>{item.price}</div>
                        <div className="text-xs text-gray-500">{item.qty}</div>
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {[
                      ["Price:", "Negotiable"],
                      ["Type:", "Classic shoes"],
                      ["Material:", "Plastic material"],
                      ["Design:", "Modern nice"],
                      ["Customization:", "Customized logo and design custom packages"],
                      ["Protection:", "Refund Policy"],
                      ["Warranty:", "2 years full warranty"],
                    ].map(([label, value], i) => (
                      <div key={i} className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500">{label}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs section */}
            <div className="bg-white rounded-lg">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 border-b">
                  {["description", "reviews", "shipping", "seller"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="description" className="p-4 text-gray-600">
                  Product description content...
                </TabsContent>
                <TabsContent value="reviews" className="p-4 text-gray-600">
                  Reviews content...
                </TabsContent>
                <TabsContent value="shipping" className="p-4 text-gray-600">
                  Shipping info...
                </TabsContent>
                <TabsContent value="seller" className="p-4 text-gray-600">
                  Seller info...
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10 bg-blue-100">
                    <AvatarFallback className="text-blue-600 font-semibold">R</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm text-gray-500">Supplier</div>
                    <div className="font-medium">Guangjoi Trading LLC</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <Image src="/images/icon.png" alt="Germany" width={24} height={16} />
                    <span>Germany, Berlin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <span>Worldwide shipping</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Button className="w-full bg-blue-600">Send Inquiry</Button>
                  <Button variant="outline" className="w-full">
                    Seller&apos;s profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* You may like */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">You may like</h3>
                <div className="space-y-3">
                  {youMayLike.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image src={item.image} alt={item.name} width={48} height={48} />
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ShoppingCartPage />
    </div>
  )
}
