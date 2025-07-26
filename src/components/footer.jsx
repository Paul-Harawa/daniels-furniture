import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-black text-gray-200 py-6">
      <div class="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        <div class="text-md font-bold text-white">
          <a href="#home" className="flex flex-row hover:text-[#f2b3b3]">
            <span className="p-1"><img className="w-6" src={'/images/dark sticker.png'} alt="" /></span>
            <h1 className="text-xl font-bold uppercase">
               Daniel's Furniture
            </h1>
          </a>
        </div>

        <div class="max-w-full overflow-hidden flex flex-row space-x-3 text-sm">
          
          
          
        </div>

        <div class="text-sm text-gray-100">
          © 2025 Daniel's Furniture. All rights reserved.
        </div>
      </div>


      <br />
      <div className="flex flex-row justify-center items-center pt-5">
        <p className="text-sm text-gray-100 flex flex-row space-x-2">
          Developed by UnoBit Systems.
        </p>
      </div>
    </footer>
  );
}

export default Footer;