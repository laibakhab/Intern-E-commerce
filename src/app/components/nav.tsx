import { Button } from "@/components/ui/button";
import { Menubar } from "@/components/ui/menubar";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ShipFlage from "@/app/assests/images/WhatsApp Image 2025-07-29 at 13.02.01_ea4d662d.jpg"

import Link from "next/link";
import Menu from "@/app/assests/images/menu.png"

export default function Navbar() {
  return (
  <div className="max-w-7xl mx-auto flex border-b pb-4 items-center gap-4">
    <div className=" w-[620px] h-[24px] mt-[16px] left-[130px]  ">
        <ul className="flex space-x-6 text-[#1C1C1C]  ml-[40px] ">
          <Image 
                src={Menu} 
                alt='Image' 
                className='w-[25px] h-[20px]  mt-[1px] ' 
            />
            
            <Link href ="/secPage" ><li className="hover:text-gray-900  cursor-pointer w-25 ">All Category</li></Link>  
            <Link href ="/" ><li className="hover:text-gray-900 cursor-pointer w-20 ">Hot Offers</li></Link>
            <Link href ="/shop" ><li className="hover:text-gray-900 cursor-pointer w-20 ">Gift Boxes</li></Link>
            <Link href ="/blog" ><li className="hover:text-gray-900 cursor-pointer w-15 ">Projects</li></Link>
            <Link href ="/contact" ><li className="hover:text-gray-900 cursor-pointer w-20 ">Menu Item</li></Link>
            <div className="flex">
            <Link href ="/help" ><li className="hover:text-gray-900 cursor-pointer  ">Help</li></Link>
            <ChevronDown className="h-5 w-5 ml-2 mt-1" />
            </div>
          </ul>

    </div>
    <div className="h-[24px] w-[124px]  ml-[400px] mt-[16px]   flex">
        <p className="w-[98px] h-[22px] ml-[10px] text text-base ">English, USD</p>
        <ChevronDown className="h-5 w-5 mt-1" />

    </div>
    <div  className="h-[24px] w-[115px] mt-[16px]  flex">
        <p className="w-[70px] h-[22px] text text-base ">Ship to</p>
        <Image 
                src={ShipFlage} 
                alt='Image' 
                className='w-[25px] h-[20px] mt-[1px] ml-[5px] mr-[5px] ' 
            />
        <ChevronDown  className="h-5 w-5 mt-1"/>
        


    </div>
    
    
  </div>  
  );
}