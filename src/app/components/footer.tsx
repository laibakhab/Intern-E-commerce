import Image from "next/image";
import EngFlage from "../../app/assests/images/flag.png";
import {
  ShoppingBag,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";
import Google from "../../app/assests/images/WhatsApp Image 2025-07-28 at 15.15.43_dc127880.jpg";
import Google1 from "../../app/assests/images/WhatsApp Image 2025-07-28 at 15.15.43_e4432e0e.jpg";

export default function Footer() {
  return (
    <div className="max-w-8xl mx-auto">
      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 p-6 md:p-10">
        {/* Logo + Brand */}
        <div className="sm:col-span-2">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-blue-500 p-2 rounded-lg">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-blue-500">Brand</span>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Best information about the company goes here but now lorem ipsum is
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
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
        <FooterLinks
          title="About"
          links={["About Us", "Find Store", "Categories", "Blogs"]}
        />
        <FooterLinks
          title="Partnership"
          links={["About Us", "Find Store", "Categories", "Blogs"]}
        />
        <FooterLinks
          title="Information"
          links={["Help Center", "Money Refund", "Shipping", "Contact Us"]}
        />
        <FooterLinks
          title="For Users"
          links={["Login", "Register", "Setting", "My Orders"]}
        />

        {/* App Images */}
        <div>
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
      <div className="h-[68px] bg-[#DEE2E7] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 text-sm">
        <p className="text-[#606060]">© 2023 Ecommerce.</p>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <Image
            src={EngFlage}
            alt="Flag"
            className="w-[25px] h-[20px] object-cover"
          />
          <p className="text-base">English</p>
          <ChevronDown className="h-5 w-5 rotate-180" />
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

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <ul>
        <li className="font-semibold mb-2 text-[16px]">{title}</li>
        {links.map((link, i) => (
          <li key={i} className="text-gray-600 hover:text-blue-500 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
