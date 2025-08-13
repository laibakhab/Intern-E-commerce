"use client";

import Image from "next/image";
import BannerImage from "../../../public/images/image 92.png";
import { ArrowRight } from "lucide-react";

interface ProductCategory {
  id: number;
  name: string;
  price: string;
  image: string;
}

const productCategories: ProductCategory[] = [
  { id: 1, name: "Soft chairs", price: "From USD 19", image: "/images/rasm-1.png" },
  { id: 2, name: "Sofa & chair", price: "From USD 19", image: "/images/image 94.png" },
  { id: 3, name: "Kitchen dishes", price: "From USD 19", image: "/images/image 93.png" },
  { id: 4, name: "Smart watches", price: "From USD 19", image: "/images/pot small.png" },
  { id: 5, name: "Kitchen mixer", price: "From USD 100", image: "/images/mixer.png" },
  { id: 6, name: "Blenders", price: "From USD 39", image: "/images/blender.png" },
  { id: 7, name: "Home appliance", price: "From USD 19", image: "/images/rasm.png" },
  { id: 8, name: "Coffee maker", price: "From USD 10", image: "/images/plant.png" },
];

export default function HomeOutdoorShowcase() {
  return (
    <div className="bg-white mx-auto rounded-lg mt-10 border overflow-hidden w-full max-w-[1180px] flex flex-col md:flex-row">
      {/* Left Banner Section */}
      <div className="relative w-full md:w-[280px] h-[200px] md:h-[257px]">
        <Image
          src={BannerImage}
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 p-5 flex flex-col justify-center space-y-4 bg-black/20 md:bg-transparent">
          <h4 className="text-[20px] leading-[26px] tracking-[-0.2px] font-bold text-white md:text-gray-900">
            Home and <br /> outdoor
          </h4>
          <button className="inline-flex items-center gap-2 bg-white hover:bg-blue-100 text-black px-4 py-2 rounded-lg font-medium transition-colors group w-fit">
            Source now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Right Product Grid Section */}
      <div className="flex-1 bg-white p-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer bg-white hover:bg-gray-50 rounded-lg p-3 flex justify-between items-center min-h-[100px] transition-colors"
            >
              {/* Left: Title and Price */}
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-800">{category.name}</h3>
                <p className="text-xs text-gray-500 font-medium">{category.price}</p>
              </div>

              {/* Right: Product Image */}
              <div className="relative w-16 h-16">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
