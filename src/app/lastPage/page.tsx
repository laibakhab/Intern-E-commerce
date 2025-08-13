"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ShoppingCart, Lock, Headphones, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ShoppingCartPages from "../components/blue"

const cartItems = [
  {
    id: 1,
    name: "T-shirts with multiple colors, for men and lady",
    details: "Size: medium, Color: blue, Material: Plastic, Seller: Arad Market",
    price: 78.99,
    quantity: 9,
    image: "/images/Bitmap-1.png",
  },
  {
    id: 2,
    name: "College bags for girls Pu leather with shoulder bag Fashion Backpack for women ",
    details: "Size: medium, Color: blue, Material: Plastic, Seller: Best Factory LLC",
    price: 39.5,
    quantity: 3,
    image: "/images/backpack.png",
  },
  {
    id: 3,
    name: "Porous concrete table lamp",
    details: "Size: medium, Color: blue, Material: Plastic, Seller: Arad Market",
    price: 170.5,
    quantity: 1,
    image: "/images/image 94.png",
  },
]

const savedItems = [
  {
    id: 1,
    name: "GoPro HERO6 4K Action Camera",
    details: "Black",
    price: 99.5,
    image: "/images/Bitmap-1.png",
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera",
    details: "Black",
    price: 99.5,
    image: "/images/image 94.png",
  },
  {
    id: 3,
    name: "GoPro HERO6 4K Action Camera",
    details: "Black",
    price: 99.5,
    image: "/images/backpack.png",
  },
  {
    id: 4,
    name: "GoPro HERO6 4K Action Camera",
    details: "Black",
    price: 99.5,
    image: "/images/Bitmap-1.png",
  },
]

export default function ShoppingCartPage() {
  const [couponCode, setCouponCode] = useState("")
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)))
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = 80.0
  const tax = 14.0
  const total = subtotal - discount + tax

  const moveToCart = (savedItem: any) => {
    // Logic to move saved item to cart
    console.log("Moving to cart:", savedItem)
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2  border-1 rounded-lg">
            <div className="bg-white  rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-6">My cart ({items.length})</h1>

              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.details}</p>

                      <div className="flex items-center gap-4">
                        <button onClick={() => removeItem(item.id)} className="text-red-600 border-2 p-1 rounded-sm w-20 text-sm hover:underline">
                          Remove
                        </button>
                        <button className="text-blue-600 text-sm border-2 p-1 rounded-sm w-30 hover:underline">Save for later</button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-lg mb-2">${item.price}</div>
                      <Select
                        value={item.quantity.toString()}
                        onValueChange={(value) => updateQuantity(item.id, Number.parseInt(value))}
                      >
                        <SelectTrigger className="w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[...Array(10)].map((_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              Qty: {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <Button variant="outline" className="flex items-center gap-2 bg-[#0067FF]">
                  <ArrowLeft className="w-4 h-4" />
                  Back to shop
                </Button>
                <button className="text-blue-600 border-2 p-1 rounded-sm w-30 hover:underline">Remove all</button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-sm">Secure payment</div>
                    <div className="text-xs text-gray-500">Your data is protected</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-sm">Customer support</div>
                    <div className="text-xs text-gray-500">Here to help 24/7</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-sm">Free delivery</div>
                    <div className="text-xs text-gray-500">On orders over $50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                {/* Coupon Section */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Have a coupon?</p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" className="text-blue-600 bg-transparent">
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount:</span>
                    <span className="font-medium text-red-600">-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-medium text-red-600">+${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-lg">Total:</span>
                      <span className="font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-4">Checkout</Button>

                {/* Payment Methods */}
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                    V
                  </div>
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
                    PP
                  </div>
                  <div className="w-8 h-5 bg-gray-600 rounded text-white text-xs flex items-center justify-center">
                    AE
                  </div>
                  <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center">
                    GP
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Saved for Later */}
        <div className="mt-12">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">Saved for later</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {savedItems.map((item) => (
                <div key={item.id} className="text-center">
                  <Image
  src={item.image || "/placeholder.svg"}
  alt={item.name}
  width={120}
  height={120}
  className="w-full h-32 object-contain rounded-lg mb-3 bg-white"
/>

                  <div className="font-bold text-lg mb-1">${item.price}</div>
                  <h3 className="font-medium text-sm mb-1 line-clamp-2">{item.name}</h3>
                  <p className="text-xs text-gray-600 mb-3">{item.details}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-blue-600 bg-transparent"
                    onClick={() => moveToCart(item)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Move to cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ShoppingCartPages/>

    </div>
  )
}
