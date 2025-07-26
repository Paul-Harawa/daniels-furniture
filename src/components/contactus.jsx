import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

function Contact() {
  return (
    <div class="max-w-6xl mx-auto pt-10 pb-12" id="contact">
      <div className="flex flex-col text-center py-12 ">
        <h1 className="font-bold text-2xl ">Get In Touch</h1>
      </div>

      <div className="w-full flex flex-row justify-center pb-6">
        <p className="text-gray-600 px-4 w-10/12  text-start">
          We are available 24/7. You can reach us via email, phone call,
          facebook, whatsapp, or by filling out the contact form below. We look
          forward to hearing from you! <br /> <br />
          <b>Physical address: </b>Lilongwe, Area 25, Near Nsungwi Market, Rejected Road, Opposite Edge Nsungwi Building. <br />
          <b>Phone Number: </b>265 988 842 079
          <br />
          <b>Email: </b>{" "}
          <a href="mailto:peoplestrustmw@gmail.com">yamikanichirwa25@gmail.com</a>
        </p>
      </div>

      <div className="h-auto">
        <div className="flex flex-row justify-around text-5xl py-6">
          <a href="tel:0988842079"><FiPhoneCall className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" /></a>
          <a href="mailto:yamikanichirwa25@gmail.com"><HiOutlineMail className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" /></a>
          <a href="https://www.facebook.com/profile.php?id=61550276595595"><SlSocialFacebook className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" /> </a>
          <a href="https://wa.me/265988842079"><FaWhatsapp className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" /></a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        <div class="bg-gray-100 rounded-lg shadow-lg p-6">
          <form action="#" method="POST">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="number"
                id="name"
                name="name"
                placeholder="Your contact number"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full p-3 bg-[#FF9292] text-white font-bold rounded-lg hover:bg-[#FF9292]/90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div class="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.2085074368188!2d33.75335437526102!3d-13.886477286519593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d5f95859a80d%3A0x9c9251f47ed66030!2sNsungwi%20Market!5e0!3m2!1sen!2sza!4v1753297068094!5m2!1sen!2sza"
            wwidth="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            class="h-full w-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
