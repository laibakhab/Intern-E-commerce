
import Image from "next/image";
import EngFlage from "../../app/assests/images/flag.png"
import { ShoppingBag, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronDown } from 'lucide-react';
import Google from "../../app/assests/images/WhatsApp Image 2025-07-28 at 15.15.43_dc127880.jpg";
import Google1 from "../../app/assests/images/WhatsApp Image 2025-07-28 at 15.15.43_e4432e0e.jpg";

export default function Footer() {
  return (
    <div className="max-w-8xl mx-auto  items-center ">
      {/* Main Content */}
      <div className=" flex flex-wrap ml-30 gap-10 p-10">
        {/* Logo + Brand */}


    <div className="w-[300px] p-4">
      {/* Brand Logo + Name */}
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-blue-500 p-2 rounded-lg">
          <ShoppingBag className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-semibold text-blue-500">Brand</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        Best information about the company goes here but now lorem ipsum is
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <IconWrapper>
          <Facebook className="h-4 w-4 text-gray-500" />
        </IconWrapper>
        <IconWrapper>
          <Twitter className="h-4 w-4 text-gray-500" />
        </IconWrapper>
        <IconWrapper>
          <Linkedin className="h-4 w-4 text-gray-500" />
        </IconWrapper>
        <IconWrapper>
          <Instagram className="h-4 w-4 text-gray-500" />
        </IconWrapper>
        <IconWrapper>
          <Youtube className="h-4 w-4 text-gray-500" />
        </IconWrapper>
      </div>
    </div>
  


   
        
        

        {/* Links */}
        <div className="mt-4">
          <ul>
            <li className="font-semibold mb-2 text-[16px]">About</li>
            <li>About Us</li>
            <li>Find Store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className="mt-4">
          <ul>
            <li className="font-semibold mb-2 text-[16px]">Partnership</li>
            <li>About Us</li>
            <li>Find Store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className="mt-4">
          <ul>
            <li className="font-semibold mb-2 text-[16px]">Information</li>
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="mt-4">
          <ul>
            <li className="font-semibold mb-2 text-[16px]">For Users</li>
            <li>Login</li>
            <li>Register</li>
            <li>Setting</li>
            <li>My Orders</li>
          </ul>
        </div>

        {/* App Images */}
        <div className="mt-4">
          <p className="font-semibold mb-2">Get App</p>
          <Image
            src={Google}
            alt="Google App"
            className="w-[124px] h-[42px] mb-2"
          />
          <Image
            src={Google1}
            alt="Google App"
            className="w-[124px] h-[42px]"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" h-[68px] bg-[#DEE2E7] max-w-8xl mx-auto flex items-center">
        <p className="text-[#606060] ml-30">© 2023 Ecommerce.</p>
        <div className="h-[24px] w-[124px]  ml-200 mt-[5px]   flex">
          <Image 
                          src={EngFlage} 
                          alt='Image' 
                          className='w-[25px] h-[20px] mr-2 mt-[3px] ' 
                      />
              <p className=" h-[22px]   text text-base ">English</p>
              <ChevronDown className="h-5 w-5 rotate-180 mt-1" />
      
          </div>
      </div>
      
    </div>
  );
}

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-200 cursor-pointer">
      {children}
    </div>
  );
}
