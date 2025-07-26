import React from 'react';

const Hero = () => (
    <section className="relative  bg-cover bg-center h-[100vh] flex items-center justify-center " style={{ backgroundImage: "url('/images/hero1.jpg') " }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-2xl z-10">
        <img src="/images/dark sticker.png" alt="Elegant Furniture" className="mx-auto" />
        <p className="text-md mb-6 text-gray-300 font-fancy italic">Discover modern designs that blend comfort and style seamlessly.</p>
        <br /><br />
        <a href="#shop" className="inline-block bg-gray-900 hover:bg-gray-600 border border-white text-white font-semibold py-6 px-12 rounded-full transition">
          Shop Now!
        </a>
      </div>
    </section>
  );

export default Hero;