import { Mail } from "lucide-react";

export default function UprFooter() {
  return (
    <div className="h-[190px] bg-[#EFF2F4] max-w-screen-2xl mx-auto flex items-center justify-center">
      <div className="max-w-[617px] w-full text-center px-4">
        <p className="font-semibold text-[20px] leading-[28px]">
          Subscribe to our newsletter
        </p>
        <p className="text-[#606060] text-[16px] leading-[24px] mt-1">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        <form className="flex items-center justify-center mt-6 bg-gray-100 p-2 rounded-md max-w-[500px] mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
