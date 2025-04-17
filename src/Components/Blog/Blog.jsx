import React from 'react';
import image1 from '../../assets/blog-1.svg';
import image2 from '../../assets/blog-2.svg';
import image3 from '../../assets/blog-3.svg';




const Blog = () => {
  return (
    <>
    <section className="blog" id="blog">
    <div className="section-title">
        <h2>Latest Posts</h2>
      </div>
      <div className="blog-container flex justify-center flex-wrap gap-4 transition-all duration-400 ">
        <div className="col bg-white w-[320px] shadow-xl rounded-2xl relative overflow-hidden group transition-all cursor-pointer duration-300 hover:-translate-y-4">
        <div className="badge absolute bg-[#FF4C60] left-6 px-3 rounded-b-xl text-white text-base z-10">
          Review
        </div>
          <div className="blog-img rounded-2xl transition-all duration-400 hover:scale-110 ">
            <img  src={image1} className='w-full' /></div>
           <div className="content p-4">
            <h4 className='text-xl font-bold mb-4 hover:text-[#FF4C60]'>5 Best App Development Tool for Your Projects</h4>
            <p className='text-[#5E5C7F]'>09 February, 2022 . Bolby</p>
           </div>
        </div>
        <div className="col bg-white w-[320px] shadow-xl rounded-2xl relative overflow-hidden group transition-all cursor-pointer duration-300 hover:-translate-y-4">
        <div className="badge absolute bg-[#FF4C60] left-6 px-3 rounded-b-xl text-white text-base z-10">Tutorial</div>
          <div className="blog-img rounded-2xl  transition-all duration-400 hover:scale-110"><img src={image2} className='w-full' /></div>
           <div className="content p-4">
            <h4 className='text-xl font-bold mb-4 hover:text-[#FF4C60]'>Common Misconceptions About Payment</h4>
            <p className='text-[#5E5C7F]'>07 February, 2022 . Bolby</p>
           </div>
        </div>
        <div className="col bg-white w-[320px] shadow-xl rounded-2xl relative overflow-hidden group transition-all cursor-pointer duration-300 hover:-translate-y-4">
        <div className="badge absolute bg-[#FF4C60] left-6 px-3 rounded-b-xl text-white text-base z-10">Business</div>
          <div className="blog-img rounded-2xl transition-all duration-400 hover:scale-110 "><img src={image3} className='w-full' /></div>
           <div className="content p-4">
            <h4 className='text-xl font-bold mb-4 hover:text-[#FF4C60] '>3 Things to know about startup business</h4>
            <p className='text-[#5E5C7F]'>05 February, 2022 . Bolby</p>
           </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Blog