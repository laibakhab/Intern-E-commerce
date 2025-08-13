

"use client";

import { useState } from "react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Menu from "@/app/assests/images/menu.png";
import ShipFlage from "@/app/assests/images/WhatsApp Image 2025-07-29 at 13.02.01_ea4d662d.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b pb-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Left Icon */}
        <div className="flex items-center gap-4">
          

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 text-[#1C1C1C]">
            <Link href="/secPage"><li className="hover:text-gray-900 cursor-pointer">All Category</li></Link>
            <Link href="/"><li className="hover:text-gray-900 cursor-pointer">Hot Offers</li></Link>
            <Link href="/shop"><li className="hover:text-gray-900 cursor-pointer">Gift Boxes</li></Link>
            <Link href="/blog"><li className="hover:text-gray-900 cursor-pointer">Projects</li></Link>
            <Link href="/contact"><li className="hover:text-gray-900 cursor-pointer">Menu Item</li></Link>
            <div className="flex items-center">
              <Link href="/help"><li className="hover:text-gray-900 cursor-pointer">Help</li></Link>
              <ChevronDown className="h-5 w-5 ml-1" />
            </div>
          </ul>
        </div>

        {/* Right Options */}
        <div className="flex items-center gap-6">
          {/* Language */}
          <div className="hidden sm:flex items-center gap-2">
            <p className="text-base">English, USD</p>
            <ChevronDown className="h-5 w-5" />
          </div>

          {/* Ship To */}
          <div className="flex items-center gap-2">
            <p className="text-base">Ship to</p>
            <Image
              src={ShipFlage}
              alt="Flag"
              className="w-[25px] h-[20px]"
            />
            <ChevronDown className="h-5 w-5" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3">
          <Link href="/secPage"><div className="hover:text-gray-900">All Category</div></Link>
          <Link href="/"><div className="hover:text-gray-900">Hot Offers</div></Link>
          <Link href="/shop"><div className="hover:text-gray-900">Gift Boxes</div></Link>
          <Link href="/blog"><div className="hover:text-gray-900">Projects</div></Link>
          <Link href="/contact"><div className="hover:text-gray-900">Menu Item</div></Link>
          <div className="flex items-center">
            <Link href="/help"><div className="hover:text-gray-900">Help</div></Link>
            <ChevronDown className="h-5 w-5 ml-1" />
          </div>

          {/* Mobile Language */}
          <div className="flex items-center gap-2 mt-3">
            <p className="text-base">English, USD</p>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      )}
    </nav>
  );
}
