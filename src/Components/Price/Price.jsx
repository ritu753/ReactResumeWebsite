import React from 'react';
import image1 from "../../assets/price-1.svg";
import image2 from "../../assets/price-2.svg";
import image3 from "../../assets/price-3.svg";
import './Price.css';



const Price = () => {
  return (
    <>
    <section className="price">
    <div className="section-title"><h2>Price</h2> </div>

    <div className="price-container flex justify-center items-stretch flex-wrap">
      <div className="col w-[330px] px-7 py-9 text-center shadow-md rounded-2xl bg-white mb-8">
        <div className='flex items-center justify-center mb-7'><img src= {image1} className='h-20'  /></div>
        <h4 className='text-2xl font-bold mb-5'>Basic</h4>
        <p className='text-md text-[#5E5C7F] mb-4'>A Simple option but powerful to manage your business</p>
        <span className='text-base text-[#5E5C7F] mb-8'>Email support</span>
        <p className='text-base text-[#5E5C7F] mb-6 mt-6'>$ <span className='text-4xl text-black font-bold '>9</span>Month</p>
        <button className='btn-default rounded-full'>get started</button>
      </div>
      <div className="col w-[330px] px-7 py-9 text-center shadow-md rounded-2xl scale-105 bg-white relative overflow-hidden mb-8" >
        <p className='absolute top-14 px-4 -left-5 bg-blue-400 text-white -rotate-90 rounded-s-full text-sm'>Recommended</p>
      <div className='flex items-center justify-center mb-7'><img src= {image2} className='h-20' /></div>
        <h4 className='text-2xl font-bold mb-5'>Premium</h4>
        <p className='text-md text-[#5E5C7F] mb-4'>Unlimited product including app integration and more features</p>
        <span className='text-base text-[#5E5C7F] mb-8'>Mon-Fri support</span>
        <p className='text-base text-[#5E5C7F] mb-6 mt-6'>$ <span className='text-4xl text-black font-bold '>49</span>Month</p>
        <button className='btn-default rounded-full'>get started</button>
      </div>

      <div className="col w-[330px] px-7 py-9 text-center shadow-md rounded-2xl bg-white mb-8">
      <div className='flex items-center justify-center mb-7 '><img src= {image3} className='h-20' /></div>
        <h4 className='text-2xl font-bold mb-5'>Ultimate</h4>
        <p className='text-md text-[#5E5C7F] mb-4'>A wise option for large companies and individuals</p>
        <span className='text-base text-[#5E5C7F] mb-8'>24/7 support</span>
        <p className='text-base text-[#5E5C7F] mb-6 mt-6'>$ <span className='text-4xl text-black font-bold '>99</span>Month</p>
        <button className='btn-default rounded-full'>get started</button>
      </div>
    </div>

    </section>
    </>
  )
}

export default Price;