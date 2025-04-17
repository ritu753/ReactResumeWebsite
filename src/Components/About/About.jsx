import React from 'react';
import aboutImg from "../../assets/avatar-2.svg";
import { AiOutlineFire } from "react-icons/ai";
import { BsCupHot } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import "./About.css"

const About = () => {
  return (
    <>
    <section className='about' id='about'>
    <div className="section-title"><h2>About Me</h2> </div>
    <div className="abt-container flex items-start">
      <div className="abt-img mr-16"><img src={aboutImg} /></div>
      <div className='abt-content-container'>
      <div className="abt-content relative bg-white shadow-xl flex p-7 rounded-lg">
        <div className="abt-info w-[50%] mr-6">
          <p>I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>
          <button className='btn-default rounded-full mt-4'>Download CV</button>
        </div>
        <div className="skills w-[50%]">
         <div className="skill-cont mb-3">
         <div className="skills-name flex items-center justify-between">
            <h3>Development</h3>
            <p>90%</p>
          </div>
          <div className="progress-info">
            <div className='progess-bg w-full h-2 bg-[#F1F1F1] rounded-full'><div className='progress-bar w-[90%] h-2 bg-[#FFD15C] rounded-full'></div></div>
          </div>
         </div>
         <div className="skill-cont mb-3">
         <div className="skills-name flex items-center justify-between">
            <h3>Ui/Ux Design</h3>
            <p>80%</p>
          </div>
          <div className="progress-info">
            <div className='progess-bg w-full h-2 bg-[#F1F1F1] rounded-full'><div className='progress-bar w-[80%] h-2 bg-[#FF4C60] rounded-full'></div></div>
          </div>
         </div>
         <div className="skill-cont mb-3">
         <div className="skills-name flex items-center justify-between">
            <h3>Photography</h3>
            <p>70%</p>
          </div>
          <div className="progress-info">
            <div className='progess-bg w-full h-2 bg-[#F1F1F1] rounded-full'><div className='progress-bar w-[70%] h-2 bg-[#775ffd] rounded-full'></div></div>
          </div>
         </div>
        </div>
      </div>
      </div>
    </div>
     <div className="row acheivement flex items-center justify-between flex-wrap mt-20">
      <div className="col flex items-start mb-4">
        <div className='text-5xl text-[#bbb8b8d7] mr-5'><AiOutlineFire /></div>
        <div className="info">
          <h3 className='text-3xl font-bold'>198</h3>
        <p className='text-[#5E5C7F]'> Projects completed</p>
        </div>
      </div>
      <div className="col flex items-start mb-4">
        <div className='text-5xl text-[#bbb8b8d7] mr-5'><BsCupHot /></div>
        <div className="info">
          <h3 className='text-3xl font-bold'>5670</h3>
        <p className='text-[#5E5C7F]'> Cup of coffee</p>
        </div>
      </div>
      <div className="col flex items-start mb-4">
        <div className='text-5xl text-[#bbb8b8d7] mr-5'><LuUsers /></div>
        <div className="info">
          <h3 className='text-3xl font-bold'>427</h3>
        <p className='text-[#5E5C7F]'> Satisfied clients</p>
        </div>
      </div>
      <div className="col flex items-start mb-4">
        <div className='text-5xl text-[#bbb8b8d7] mr-5'><SlBadge /></div>
        <div className="info">
          <h3 className='text-3xl font-bold'>35</h3>
        <p className='text-[#5E5C7F]'> Nominees winner</p>
        </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default About;