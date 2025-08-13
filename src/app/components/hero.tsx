"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Image3 from "@/app/assests/images/Banner-board-800x420 2.png";
import Link from "next/link";
import contact from "@/app/assests/images/Avatar.png";

export default function HeroSection() {
  return (
    <div className="max-w-[1180px] w-full mt-10 mx-auto border rounded-lg mb-12 flex flex-col lg:flex-row gap-4 p-4">
      
      {/* Sidebar Categories */}
      <div className="w-full lg:w-[250px] bg-white">
        <ul className="divide-y divide-gray-200">
          {[
            { name: "Automobiles", link: "/secPage" },
            { name: "Cloths and Wear", link: "/forPage" },
            { name: "Home interiors", link: "#" },
            { name: "Computer and tech", link: "#" },
            { name: "Tools, equipment", link: "#" },
            { name: "Sport and outdoor", link: "#" },
            { name: "Animals and pets", link: "#" },
            { name: "Machinary Tools", link: "#" },
            { name: "More category", link: "#" },
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <li className="px-4 py-2 hover:bg-blue-200 cursor-pointer text-sm sm:text-base">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Main Banner */}
      <div className="relative flex-1 min-h-[200px]">
        <Image
          src={Image3}
          alt="Banner"
          className="w-full h-full max-h-[360px] object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 p-6 sm:p-8">
          <p className="text-lg sm:text-2xl font-medium text-black">
            Latest trending
          </p>
          <h1 className="text-xl sm:text-3xl font-bold text-black">
            Electronic items
          </h1>
          <Button className="bg-white text-black hover:bg-gray-200 mt-4">
            Learn more
          </Button>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="w-full lg:w-[250px] flex flex-col gap-3">
        {/* Profile Card */}
        <div className="bg-[#E3F0FF] rounded-sm p-4 flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <Image
              src={contact}
              alt="User"
              className="w-10 h-10 object-cover"
            />
            <div className="text-sm">
              <p>Hi, user</p>
              <p>Let's get started</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2 w-full">
            <button className="w-full rounded-md h-9 bg-[#127FFF] text-white text-sm">
              Join now
            </button>
            <button className="w-full h-9 rounded-md bg-white text-sm">
              Login
            </button>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="bg-[#F38332] rounded-md p-3 text-white text-sm">
          <p>Get US $10 off</p>
          <p>with a new</p>
          <p>supplier</p>
        </div>
        <div className="bg-[#55BDC3] rounded-md p-3 text-white text-sm">
          <p>Send quotes with</p>
          <p>supplier</p>
          <p>preferences</p>
        </div>
      </div>
    </div>
  );
}
