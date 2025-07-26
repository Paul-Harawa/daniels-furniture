import React, { useState, useEffect } from "react";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const images = [
  "/images/catalogue/coach.png",
  "/images/catalogue/coffee chair.png",
  "/images/catalogue/office.png",
];

const images2 = [
  "/images/catalogue/coffee chair.png",
  "/images/catalogue/coach.png",
  "/images/catalogue/office.png",
];

export default function ProductTypeSelector() {
  const productTypes = [
    "All Products",
    "Bedroom",
    "Living Room",
    "Dining Room",
    "Study Room",
    "Kids Room",
    "Outdoor",
    "Office",
    "Fabrics",
    "Other Accessories",
  ];
  const [selectedType, setSelectedType] = useState(productTypes[0]);

  const [current, setCurrent] = useState(0);
  const [current2, setCurrent2] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, [isHovered, current]);

  useEffect(() => {
    if (isHovered2) return;

    const interval2 = setInterval(() => {
      setCurrent2((prev) => (prev + 1) % images2.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval2);
  }, [isHovered2, current2]);

  // Manual control
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  // Manual control 2
  const next2 = () => setCurrent2((current2 + 1) % images2.length);
  const prev2 = () =>
    setCurrent2((current2 - 1 + images2.length) % images2.length);

  return (
    <section className="min-h-screen w-full bg-gray-100 text-center">
      <h2 className="py-4 mt-4 text-xl font-bold">Our Collection</h2>

      <div className="flex flex-wrap gap-4 px-4 text-md justify-center">
        {productTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`transition duration-200 ease-in-out 
          ${
            selectedType === type
              ? "font-bold underline underline-offset-8 decoration-2 decoration-green-500 text-green-600"
              : "text-gray-600 hover:text-green-500"
          }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* ✅ Row 1 */}
      <div className="flex flex-col md:flex-row gap-4 p-4 items-center">
        {/* Carousel - Left */}
        <div
          className="w-full md:w-2/3 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={images[current]}
            alt="Carousel One"
            className="object-contain w-full h-[300px] md:h-[500px] rounded-lg transition-transform hover:scale-105"
            loading="lazy"
          />
          {/* Controls & Button */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full text-white hover:bg-gray-500"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full text-white hover:bg-gray-500"
          >
            <FaAngleRight />
          </button>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <button className="px-6 py-3 flex items-center bg-green-600 text-white rounded-full font-bold hover:bg-green-700 text-sm">
              Order Now <FaCartShopping className="ml-2 mt-1" />
            </button>
          </div>
        </div>

        {/* Static Images - Right */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {["/images/catalogue/coach.png", "/images/catalogue/office.png"].map(
            (src, i) => (
              <div key={i} className="w-full h-[200px] md:h-[250px] relative">
                <img
                  src={src}
                  alt={`Static Image ${i + 1}`}
                  className="object-contain w-full h-full rounded-lg transition-transform hover:scale-105 p-2"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="px-4 py-2 flex items-center bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 text-xs">
                    Order Now <FaCartShopping className="ml-2 mt-[2px]" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* ✅ Row 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-4 p-4 items-center">
        {/* Carousel - Right */}
        <div
          className="w-full md:w-2/3 relative"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <img
            src={images2[current2]}
            alt="Carousel Two"
            className="object-contain w-full h-[300px] md:h-[500px] rounded-lg transition-transform hover:scale-105"
            loading="lazy"
          />
          {/* Controls & Button */}
          <button
            onClick={prev2}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full text-white hover:bg-gray-500"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={next2}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full text-white hover:bg-gray-500"
          >
            <FaAngleRight />
          </button>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <button className="px-6 py-3 flex items-center bg-green-600 text-white rounded-full font-bold hover:bg-green-700 text-sm">
              Order Now <FaCartShopping className="ml-2 mt-1" />
            </button>
          </div>
        </div>

        {/* Static Images - Left */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {["/images/catalogue/coach.png", "/images/catalogue/office.png"].map(
            (src, i) => (
              <div key={i} className="w-full h-[200px] md:h-[250px] relative">
                <img
                  src={src}
                  alt={`Static Image ${i + 3}`}
                  className="object-contain w-full h-full rounded-lg transition-transform hover:scale-105 p-2"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="px-4 py-2 flex items-center bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 text-xs">
                    Order Now <FaCartShopping className="ml-2 mt-[2px]" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
