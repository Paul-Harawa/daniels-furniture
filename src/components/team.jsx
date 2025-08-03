import React from "react";

import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


function Team() {
  return (
    <div className="h-auto bg-black pb-16 pt-10" id="team">
      <div className="flex flex-col text-center py-12">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-white">Meet The Team</h1>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center">

        <p className="text-white px-4 text-center w-10/12  ">
        Our team at Daniel's Furniture is made up of passionate professionals dedicated to making your home and environment look classic. 
      </p>

      </div>

      <div className="pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-6 md:space-x-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">


          <div class="bg-black bg-opacity-30 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={'/images/team/daniel.jpg'}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-md font-bold text-gray-100">Mr. Daniel Chirwa</h2>
                <p class="text-gray-200 text-sm">Founder / CEO</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4 text-sm">
              <span className="font-light italic">
              <b>Contact</b>: +265 988 842 079 <br />
              <b>Email</b>: yamikanichirwa25@gmail.com 
              </span>
            </p>
            <div class="flex space-x-4 mt-4 justify-between">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FiPhoneCall />
                </a>
            
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
            </div>
          </div>




          



          <div class="bg-black bg-opacity-30 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={'/images/team/mr chirwa.jpg'}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-md font-bold text-gray-100">Mr Geoffry Chirwa 

                </h2>
                <p class="text-gray-200 text-sm">Managing Director</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4 text-sm">
              <b>Contact</b>: +265 999 260 293 <br />

            </p>
            <div class="flex space-x-4 mt-4 justify-between">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FiPhoneCall />
                </a>
            
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
            </div>
          </div>
          


          <div class="bg-black bg-opacity-30 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={'/images/team/mrs chirwa.jpg'}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-md font-bold text-gray-100">Mrs. Chikondi Chirwa</h2>
                <p class="text-gray-200 text-sm">CO-Founder</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4 text-sm">
              <b>Contact</b>: +265 991 197 931<br />
              <b>Email</b>: chikondikaferawanthu@gmail.com
            </p>
            <div class="flex space-x-4 mt-4 justify-between">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FiPhoneCall />
                </a>
            
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
            </div>
          </div>





          <div class="bg-black bg-opacity-30 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center">
              <img
                src={'/images/team/RACHEAL MAS.jpg'}
                alt="Team Member"
                class="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
              <div class="ml-4">
                <h2 class="text-md font-bold text-gray-100">Ms. Racheal Makocha</h2>
                <p class="text-gray-200 text-sm">Secretary</p>
              </div>
            </div>
            <p class="text-gray-100 mt-4 text-sm">
              <b>Contact</b>: +265 884 166 143 <br />
              <b>Email</b>: rachealmakocha@gmail.com 
            </p>
            <div class="flex space-x-4 mt-4 justify-between">
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FiPhoneCall />
                </a>
            
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <FaWhatsapp  />
              </a>
              <a href="#" class="bg-gray-200 p-4 rounded-full text-blue-500 hover:text-blue-700">
                <SlSocialFacebook />
              </a>
            </div>
          </div>
          

          




        </div>
      </div>
    </div>
  );
}

export default Team;