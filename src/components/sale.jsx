import React from 'react';

const SaleSection = () => (
    <section className='bg-cover w-full' style={{backgroundImage: "url('/images/sales.jpg') ", padding: '2rem 0' }}>

        <div className='w-full bg-gray-600 bg-opacity-50 backdrop-blur-sm shadow-md z-10 p-2 h-52'>

<div className='flex flex-row  h-full justify-between items-center'>


            <div className='w-1/2 mx-auto text-center text-white p-3 '>

            <h2 className='text-lg font-bold'>Get up to <span className='text-2xl text-black' >20%</span> off on all products right now.</h2>  

            <br />   

            <p className='text-sm italic'>Don't miss out on our exclusive offers and discounts!</p>

            </div>

            <div className='w-1/3 mx-auto text-center text-white'>

            <img src="/images/special.png" alt="" className='size-12/12 md:size-5/12' />

            </div>

    </div>



        </div>
       



    </section>
);

export default SaleSection;