import { Mail } from "lucide-react";

export default function UprFooter() {
  return (
    <div className="h-[190px] bg-[#EFF2F4] max-w-8xl mx-auto flex items-center ">
      <div className="h-[113px] w-[617px]  text-center ml-90">
        <p className="text-semi-bold text-[20px] leadind-[28px] ">Subscribe on our newsletter</p>
        <p className="text-[#606060] text-[16px] leadind-[24px] ">Get daily news on upcoming offers from many suppliers all over the world</p>
      
      <form  className="flex items-center ml-30 space-x-2 bg-gray-100 p-4 rounded-md">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="email"
          required
          placeholder="Email"
          
          className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Subscribe
      </button>
    </form>
      
      
      </div>


      


    </div>
  )
}