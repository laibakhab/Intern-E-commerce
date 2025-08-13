import { Button } from "@/components/ui/button";
import Image from "next/image";
import Image3 from "@/app/assests/images/Banner-board-800x420 2.png"
import Link from "next/link";
import contact from "@/app/assests/images/Avatar.png"


export default function HeroSection() {
  return (
    <div className="w-[1180] h-[400px] mt-[40px] mx-auto border-[1px] mb-[50px] flex ">
        <div className="w-[250px] h-[360px]  mt-5  top-[182px] ml-2 left-[144px] ">
            <ul>
                <Link href={"http://localhost:3000/secPage"}><li className="w-[250px] hover:bg-blue-200  ml-4 h-[40px] top-[182px] left-[144px]">Automobiles</li></Link>
                <Link href={"http://localhost:3000/forPage"}><li className="w-[250px] h-[40px] hover:bg-blue-200 ml-4 top-[182px] left-[144px]">Cloths and Wear</li></Link>
                <Link href={""}><li className="w-[250px] h-[40px] hover:bg-blue-200  ml-4 top-[182px] left-[144px]"> Home interiors</li></Link>
                <Link href={""}><li className="w-[250px] h-[40px] hover:bg-blue-200 ml-4 top-[182px] left-[144px]">Computer and tech</li></Link>
                <Link href={""}><li className="w-[250px] h-[40px] hover:bg-blue-200 ml-4 top-[182px] left-[144px]">Tools, equipment</li></Link>
                <Link href={""}><li className="w-[250px] h-[40px] hover:bg-blue-200 ml-4 top-[182px] left-[144px]">Sport and outdoor</li></Link>
                <Link href={""}><li className="w-[250px] h-[40px] hover:bg-blue-200 ml-4 top-[182px] left-[144px]">Animals and pets</li></Link>
                <Link href={""}><li className="w-[250px] h-[40px] hover:bg-blue-200 ml-4 top-[182px] left-[144px]">Machinary Tools</li></Link>
                <Link href={""}><li className="w-[250px] h-[40px] hover:bg-blue-200  ml-4 top-[182px] left-[144px]">More category</li></Link>
            </ul>

        </div>
        <div className="relative">
    <Image 
        src={Image3} 
        alt='Image' 
        className='w-[665px] h-[360px] mt-5' 
    />
    <div className="absolute top-0 mt-10 left-0 p-8">
        <p className="text-[28px] text-black">Latest trending</p>
        <h1 className="text-[32px] font-bold black">Electronic items</h1>
        <Button className="bg-white text-black hover:bg-gray-200 mt-4">Learn more</Button>
    </div>
</div>
        <div className="w-[250px] h-[360px] top-[182px] left-[144px] mt-5 ">
            <div className="w-[200px] h-[150px] bg-[#E3F0FF] rounded-sm ml-6 ">
                <div className="flex">
                    <Image 
                                    src={contact} 
                                    alt='Image' 
                                    className='w-[40px] h-[40px] ml-2 mt-[10px] ' 
                                />
                    <div className="mt-1 ml-2">
                    <p>Hi,user</p>
                    <p>lets get stated</p>
                    </div>
                    <div>
                        {/* image */}
                    </div>
                </div>
                <div className="mt-4">
                <button className="w-[180px] rounded-[6px] h-[35px] ml-2 mb-2 bg-[#127FFF]">Join now</button>
                <button className="w-[180px] h-[35px] ml-2 rounded-[6px] bg-white">Login</button>
                </div>
            </div>
            <div className="bg-[#F38332] w-[200px] ml-6 pt-3 mt-2 h-[95px] rounded-[6px]">
                <p className="ml-3 text-white">Get US $10 off</p>
                <p className="ml-3 text-white">with a new</p>
                <p className="ml-3 text-white">supplier</p>
            </div>
            <div className="bg-[#55BDC3] w-[200px] pt-3 ml-6 mt-2 h-[95px] rounded-[6px]">
                <p className="ml-3 text-white ">Send qoutes with</p>
                <p className="ml-3 text-white">supplier</p>
                <p className="ml-3 text-white">preferences</p>

            </div>
        </div>
    </div>
  )
}