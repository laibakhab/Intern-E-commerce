// "use client"
// import Header from "../components/header";
// import Navbar from "../components/nav";
// import { useState } from "react"
// import Image from "next/image"
// import { Heart, Star, CheckCircle, Shield, Globe } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// const productImages = [
//   "/placeholder.svg?height=400&width=400&text=Gray+Polo+Main",
//   "/placeholder.svg?height=100&width=100&text=Gray+Front",
//   "/placeholder.svg?height=100&width=100&text=White+Polo",
//   "/placeholder.svg?height=100&width=100&text=Blue+Polo",
//   "/placeholder.svg?height=100&width=100&text=Red+Polo",
//   "/placeholder.svg?height=100&width=100&text=Black+Polo",
//   "/placeholder.svg?height=100&width=100&text=Navy+Polo",
// ]

// const pricingTiers = [
//   { quantity: "50-100 pcs", price: "$98.00", color: "text-red-500" },
//   { quantity: "100-700 pcs", price: "$90.00", color: "text-orange-500" },
//   { quantity: "700+ pcs", price: "$78.00", color: "text-green-500" },
// ]

// const productSpecs = [
//   { label: "Price:", value: "Negotiable", color: "text-gray-600" },
//   { label: "Type:", value: "Classic shoes", color: "text-gray-600" },
//   { label: "Material:", value: "Plastic material", color: "text-blue-600" },
//   { label: "Design:", value: "Modern nice", color: "text-blue-600" },
//   { label: "Customization:", value: "Customized logo and design custom packages", color: "text-gray-600" },
//   { label: "Protection:", value: "Refund Policy", color: "text-blue-600" },
//   { label: "Warranty:", value: "2 years full warranty", color: "text-gray-600" },
// ]

// export default function B2BProductPage() {
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [isSaved, setIsSaved] = useState(false)

//   return (
//     <div>

//     <Header/>
//         <Navbar/>

//       {/* Breadcrumb */}
//       <div className="w-full  mx-auto px-4 py-3">
//         <div className="flex items-center gap-2 text-sm  text-gray-500">
//           <span className="cursor-pointer hover:text-blue-500">Home</span>
//           <span>{">"}</span>
//           <span className="cursor-pointer hover:text-blue-500">Clothings</span>
//           <span>{">"}</span>
//           <span className="cursor-pointer hover:text-blue-500">Men's wear</span>
//           <span>{">"}</span>
//           <span>Summer clothing</span>
//         </div>
//       </div>



//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* Product Images */}
//           <div className="lg:col-span-4">
//             <Card>
//               <CardContent className="p-4">
//                 {/* Main Image */}
//                 <div className="mb-4">
//                   <Image
//                     src={productImages[selectedImage] || "/placeholder.svg"}
//                     alt="Product main image"
//                     width={400}
//                     height={400}
//                     className="w-full h-80 object-cover rounded-lg border"
//                   />
//                 </div>

//                 {/* Thumbnail Images */}
//                 <div className="flex gap-2 overflow-x-auto">
//                   {productImages.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedImage(index)}
//                       className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
//                         selectedImage === index ? "border-blue-500" : "border-gray-200"
//                       }`}
//                     >
//                       <Image
//                         src={image || "/placeholder.svg"}
//                         alt={`Product thumbnail ${index + 1}`}
//                         width={64}
//                         height={64}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Product Details */}
//           <div className="lg:col-span-5">
//             <Card>
//               <CardContent className="p-6">
//                 {/* Stock Status */}
//                 <div className="flex items-center gap-2 mb-3">
//                   <CheckCircle className="w-4 h-4 text-green-500" />
//                   <span className="text-green-600 text-sm font-medium">In stock</span>
//                 </div>

//                 {/* Product Title */}
//                 <h1 className="text-2xl font-bold text-gray-900 mb-3">
//                   Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
//                 </h1>

//                 {/* Rating and Reviews */}
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-4 h-4 ${
//                           i < 4
//                             ? "fill-yellow-400 text-yellow-400"
//                             : i === 4
//                               ? "fill-yellow-400/50 text-yellow-400"
//                               : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                     <span className="text-sm text-gray-600 ml-1">4.5</span>
//                   </div>
//                   <span className="text-sm text-gray-500">32 reviews</span>
//                   <span className="text-sm text-gray-500">154 sold</span>
//                 </div>

//                 {/* Pricing Tiers */}
//                 <div className="mb-6">
//                   <div className="grid grid-cols-3 gap-4">
//                     {pricingTiers.map((tier, index) => (
//                       <div key={index} className="text-center">
//                         <div className={`text-lg font-bold ${tier.color}`}>{tier.price}</div>
//                         <div className="text-xs text-gray-500">{tier.quantity}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Product Specifications */}
//                 <div className="space-y-3">
//                   {productSpecs.map((spec, index) => (
//                     <div key={index} className="flex">
//                       <span className="text-gray-500 text-sm w-32 flex-shrink-0">{spec.label}</span>
//                       <span className={`text-sm ${spec.color}`}>{spec.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Supplier Information */}
//           <div className="lg:col-span-3">
//             <Card>
//               <CardContent className="p-4">
//                 {/* Supplier Header */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <span className="text-blue-600 font-bold text-lg">R</span>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Supplier</div>
//                     <div className="font-semibold text-gray-900">Guangxi Trading LLC</div>
//                   </div>
//                 </div>

//                 {/* Supplier Details */}
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center gap-2 text-sm">
//                     <div className="w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
//                       <span className="text-white text-xs">🇩🇪</span>
//                     </div>
//                     <span className="text-gray-600">Germany, Berlin</span>
//                   </div>

//                   <div className="flex items-center gap-2 text-sm">
//                     <Shield className="w-4 h-4 text-green-500" />
//                     <span className="text-gray-600">Verified Seller</span>
//                   </div>

//                   <div className="flex items-center gap-2 text-sm">
//                     <Globe className="w-4 h-4 text-blue-500" />
//                     <span className="text-gray-600">Worldwide shipping</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="space-y-3">
//                   <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send inquiry</Button>

//                   <Button variant="outline" className="w-full bg-transparent">
//                     Seller's profile
//                   </Button>

//                   <Button
//                     variant="ghost"
//                     className="w-full flex items-center justify-center gap-2"
//                     onClick={() => setIsSaved(!isSaved)}
//                   >
//                     <Heart className={`w-4 h-4 ${isSaved ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
//                     Save for later
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>









//       </div>


//       )
//     }



"use client"

import Image from "next/image"
import { ChevronRight, Check, Star, Heart, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import image from "next/image"
import Header from "../components/header"
import Navbar from "../components/nav"
import ShoppingCartPage from "../components/blue"
import UprFooter from "../components/upperfooter"
import Footer from "../components/footer"

export default function ProductDetailPage() {
  const productImages = [
    "/images/wallet.png",
    "/images/smartwatch small.png",
    "/images/simple headphone.png",
    "/images/Bitmap.png",
    "/images/kettle small.png",
    "/images/rasm.png",
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
      <Header/>
      <Navbar/>
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
                      src="/images/bitmap-1.png"
                      alt="Gray Polo Shirt"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
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
        <UprFooter/>
        <Footer/>
    </div>
  )
}