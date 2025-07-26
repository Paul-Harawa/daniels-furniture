import React from "react";

const Payments = () => (
  <section
    className="bg-cover w-full"
    style={{
      backgroundImage: "url('/images/payment.jpg')",
      padding: "2rem 0",
    }}
  >
    <div className="w-full bg-gray-200 bg-opacity-50 backdrop-blur-sm shadow-md z-10 p-4 md:h-52">
      <div className="flex flex-col md:flex-row h-full justify-center md:justify-between items-center gap-y-4">
        {/* Text Section */}
        <div className="w-full md:w-1/3 text-center text-gray-950 p-3">
          <h2 className="text-lg font-bold">
            Pay using any method you want.
          </h2>
          <p className="text-sm italic mt-2">
            We are open to discuss any payment methods you are comfortable with.
          </p>
        </div>

        {/* Payment Logos */}
        <div className="w-full md:w-2/3 text-center flex flex-wrap justify-center items-center gap-4 px-2">
          <img
            src="/images/payments/airtel.png"
            className="w-20 h-14 object-contain"
            alt="Airtel"
          />
          <img
            src="/images/payments/mpamba.png"
            className="w-20 h-14 object-contain"
            alt="Mpamba"
          />
          <img
            src="/images/payments/nb.png"
            className="w-20 h-14 object-contain"
            alt="NB"
          />
          <img
            src="/images/payments/stdb.png"
            className="w-20 h-14 object-contain"
            alt="Standard Bank"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Payments;