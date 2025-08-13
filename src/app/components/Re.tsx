import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function RecommendationsPage() {
  const recommendedItems = [
    {
      id: 1,
      name: "T-shirts with multiple colors, for men",
      price: "$10.30",
      image: "/images/Bitmap-1.png"
    },
    {
      id: 2,
      name: "Jeans jacket for men, blue color",
      price: "$10.30",
      image: "/images/2 1.png"
    },
    {
      id: 3,
      name: "Formal winter coat, medium size",
      price: "$12.50",
      image: "/images/blazer.png"
    },
    {
      id: 4,
      name: "Shirt bag for travel for men",
      price: "$34.00",
      image: "/images/wallet.png"
    },
    {
      id: 5,
      name: "Leather sneaker",
      price: "$69.00",
      image: "/images/backpack.png"
    },
    {
      id: 6,
      name: "Denim camera bag, 100% zoom",
      price: "$8.99",
      image: "/images/Bitmap.png"
    },
    {
      id: 7,
      name: "Headset for gaming with mic",
      price: "$8.99",
      image: "/images/simple headphone.png"
    },
    {
      id: 8,
      name: "Smartwatch, silver color modern",
      price: "$10.30",
      image: "/images/backpack.png"
    },
    {
      id: 9,
      name: "Blue wallet for men, leather metal foil",
      price: "$10.30",
      image: "/images/pot.png"
    },
    {
      id: 10,
      name: "Jeans bag for travel for men",
      price: "$80.95",
      image: "/images/kettle small.png"
    }
  ]

  const extraServices = [
    {
      title: "Source from Industry Hubs",
      image: "/images/image 108.png",
      description: "Connect with verified suppliers from major industrial centers"
    },
    {
      title: "Customize Your Products",
      image: "/images/image 104.png",
      description: "Tailor products to your specific requirements"
    },
    {
      title: "Fast, reliable shipping by ocean or air",
      image: "/images/image 106.png",
      description: "Choose from multiple shipping options for your needs"
    },
    {
      title: "Product monitoring and inspection",
      image: "/images/image 107.png",
      description: "Ensure quality with our monitoring services"
    }
  ]

  const supplierRegions = [
    { country: "Arab Emirates", image: "/images/Property 1=AE.png", tittle: "shopename.ae" },
    { country: "Denmark", image: "/images/Property 1=DK.png" },
    { country: "Australia", image: "/images/Property 1=AU.png"  },
    { country: "France",image: "/images/Property 1=FR.png"  },
    { country: "United States",image: "/images/Property 1=US.png"  },
    { country: "Russia", image: "/images/Property 1=RU.png"  },
    { country: "Arab Emirates", image: "/images/Property 1=AE.png" },
    { country: "China", image: "/images/Property 1=CN.png"  },
    { country: "Italy", image: "/images/Property 1=IT.png"  },
    { country: "Great Britain", image: "/images/Property 1=GB.png"  }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Recommended Items Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {recommendedItems.map((item) => (
              <Card key={item.id} className="bg-white hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-3 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">{item.price}</p>
                    <p className="text-xs text-gray-600 line-clamp-2">{item.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </section>

        {/* Our Extra Services Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our extra services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {extraServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{service.title}</h3>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Suppliers by Region Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Suppliers by region</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {supplierRegions.map((supplier, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <Image
                    src={supplier.image || "/placeholder.svg"}
                    alt={supplier.country}
                    width={300}
                    height={200}
                    className="w-[28px] h-[20px] object-cover"
                  />
                <span className="text-sm font-medium text-gray-700">{supplier.country}</span>
              </div>
              
              
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
