import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <section className="contact" id="contact">
    <div className="section-title"><h2>Get In Touch</h2> </div>
    <div className="row flex justify-between flex-wrap">
      <div className="col w-[35%]">
        <div className="cnt-info">
        <h4 className='font-bold text-2xl mb-4'>Let's talk about everything!</h4>
        <p className='text-[#575757]'>Don't like forms? Send me an <span className='text-[#FF4C60]'>email.</span> 👋</p>
        </div>
      </div>
      <form action="" className="cnt-form col w-[65%]">
        <div className="cnt-grup flex items-center justify-between flex-wrap">
          <div className="cnt-name w-[50%]"><input type='text' placeholder='Your name' className='w-full h-16 shadow-xl px-[30px] py-2 bg-white text-[#575757] mr-4 mb-6 rounded-full'  /></div>
          <div className="cnt-mail w-[50%]"><input type='email' placeholder='Your email' className='w-full h-16 shadow-xl px-[30px] py-2 bg-white text-[#575757] mb-6 ml-4 rounded-full focus:border-0' /></div>
        </div>
        <div className="cnt-sub"><input type='text' placeholder='Subject' className='w-full h-16 shadow-xl px-[30px] py-2 bg-white text-[#575757] mb-6  rounded-full' /></div>
        <div className="cnt-mail"><textarea placeholder='Message' cols="30" rows="10" className='w-full shadow-xl px-[30px] py-2 bg-white text-[#575757] mb-6 rounded-3xl '></textarea></div>
        <button className='btn-default rounded-full'>Send Message</button>


      </form>
    </div>
    </section>
    </>
  )
}

export default Contact