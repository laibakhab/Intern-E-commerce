import {
  ShoppingBag,
  User,
  MessageCircle,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
  Grid3X3,
  List,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
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
import UprFooter from "../components/upperfooter"
import Footer from "../components/footer"
import Link from "next/link"

export default function EcommerceWebsite() {
  return (
    
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-grey-50 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">{">"}</span>
            <span>Clothings</span>
            <span className="mx-2">{">"}</span>
            <span>Men's wear</span>
            <span className="mx-2">{">"}</span>
            <span className="text-gray-900">Summer Clothing</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Category */}
            <div className=" mb-2 border-b">
              <div className="flex items-center  justify-between mt-3 mb-3">
                <h3 className="font-semibold ">Category</h3>
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
                <div className="flex items-center space-x-2">
                  <Checkbox id="samsung" />
                  <Label htmlFor="samsung" className="text-sm">
                    Samsung
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="apple" />
                  <Label htmlFor="apple" className="text-sm">
                    Apple
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="huawei" />
                  <Label htmlFor="huawei" className="text-sm">
                    Huawei
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pocco" />
                  <Label htmlFor="pocco" className="text-sm">
                    Pocco
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lenovo" />
                  <Label htmlFor="lenovo" className="text-sm">
                    Lenovo
                  </Label>
                </div>
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
                <div className="flex items-center space-x-2">
                  <Checkbox id="metallic" />
                  <Label htmlFor="metallic" className="text-sm">
                    Metallic
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="plastic" />
                  <Label htmlFor="plastic" className="text-sm">
                    Plastic cover
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="8gb" />
                  <Label htmlFor="8gb" className="text-sm">
                    8GB Ram
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="super" />
                  <Label htmlFor="super" className="text-sm">
                    Super power
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="memory" />
                  <Label htmlFor="memory" className="text-sm">
                    Large Memory
                  </Label>
                </div>
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
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="any" id="any" />
                  <Label htmlFor="any" className="text-sm">
                    Any
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="refurbished" id="refurbished" />
                  <Label htmlFor="refurbished" className="text-sm">
                    Refurbished
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="brand-new" id="brand-new" />
                  <Label htmlFor="brand-new" className="text-sm">
                    Brand new
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="old" id="old" />
                  <Label htmlFor="old" className="text-sm">
                    Old items
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Ratings */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Ratings</h3>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="5star" />
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="4star" />
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                    <Star className="h-3 w-3 text-gray-300" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="3star" />
                  <div className="flex">
                    {[1, 2, 3].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                    {[4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 text-gray-300" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="2star" />
                  <div className="flex">
                    {[1, 2].map((star) => (
                      <Star key={star} className="h-3 w-3 fill-orange-400 text-orange-400" />
                    ))}
                    {[3, 4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
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
                  <Link href={"http://localhost:3000/thrPage"}>
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
            <div className="space-y-4 ">
              {/* Product 1 */}
              <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
              <Image 
                                                  src={Canon_Camera} 
                                                  alt='Canon Camera' 
                                                  className='w-30 h-30 object-cover rounded ' 
                                              />
                
                <div className="flex-1">
                  <h3 className="font-medium mb-2">Canon Camera EOS 2000, Black 10x zoom</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold">$998.00</span>
                    <span className="text-gray-500 line-through">$1128.00</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-500">
                    View details
                  </Button>
                </div>
                <Heart className="h-5 w-5 text-[#0D6EFD] cursor-pointer" />
              </div>

              {/* Product 2 */}
              <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                <Image 
                                                  src={mobile} 
                                                  alt='mobile' 
                                                  className='w-30 h-30 object-cover rounded ' 
                                              />
              
                <div className="flex-1">
                  <h3 className="font-medium mb-2">GoPro HERO6 4K Action Camera - Black</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold">$998.00</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
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
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-500">
                    View details
                  </Button>
                </div>
                <Heart className="h-5 w-5 text-[#0D6EFD] cursor-pointer" />
              </div>

              {/* Product 3 */}
              <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                <Image 
                                                  src={tablet} 
                                                  alt='mobile' 
                                                  className='w-30 h-30 object-cover rounded ' 
                                              />
                <div className="flex-1">
                  <h3 className="font-medium mb-2">GoPro HERO6 4K Action Camera - Black</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold">$998.00</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
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
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-500">
                    View details
                  </Button>
                </div>
                <Heart className="h-5 w-5 text-[#0D6EFD] cursor-pointer" />
              </div>

              {/* Product 4 */}
              <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                <Image 
                                                  src={labtop} 
                                                  alt='labtop' 
                                                  className='w-30 h-30 object-cover rounded ' 
                                              />
                <div className="flex-1">
                  <h3 className="font-medium mb-2">GoPro HERO6 4K Action Camera - Black</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold">$998.00</span>
                    <span className="text-gray-500 line-through">$1128.00</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
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
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-500">
                    View details
                  </Button>
                </div>
                <Heart className="h-5 w-5 text-[#0D6EFD] cursor-pointer" />
              </div>

              {/* Product 5 */}
              <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                <Image 
                                                  src={headphones} 
                                                  alt='headphones' 
                                                  className='w-30 h-30 object-cover rounded ' 
                                              />
                <div className="flex-1">
                  <h3 className="font-medium mb-2">GoPro HERO6 4K Action Camera - Black</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold">$998.00</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
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
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-500">
                    View details
                  </Button>
                </div>
                <Heart className="h-5 w-5 text-[#0D6EFD] cursor-pointer" />
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 ml-[550px] mt-8">
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



// {/* Main Content */}
//           <div className="flex-1">
//             {/* Filters and View Toggle */}
//             <div className="flex-1 ">
//             {/* Results Header */}
//             <div className="flex items-center border-1 bg-white p-3 mt-3 justify-between mb-4">
//               <div className="flex items-center gap-4">
//                 <span className="text-sm text-gray-600">
//                   12,911 items in <strong>Mobile accessory</strong>
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <Checkbox id="verified" />
//                   <Label htmlFor="verified" className="text-sm">
//                     Verified only
//                   </Label>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Select defaultValue="featured">
//                   <SelectTrigger className="w-32 h-8">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="featured">Featured</SelectItem>
//                     <SelectItem value="price-low">Price: Low to High</SelectItem>
//                     <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <div className="flex gap-1">
//                   <Button variant="outline" size="sm" className="p-1 bg-transparent">
//                     <Grid3X3 className="h-4 w-4" />
//                   </Button>
//                   <Button variant="outline" size="sm" className="p-1 bg-transparent">
//                     <List className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
          