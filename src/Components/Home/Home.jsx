import React from 'react';
import profilePic from '../../assets/avatar-1.svg';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import Shape from './Shape';
import "./Home.css"


const Home = () => {
  return (
    <>
    <div className="home bg-[#353353] text-white" id='home'>
      <Shape />
      <div className="h-[100vh] flex items-center justify-center flex-col">
        <div className="hero-img flex items-center justify-center">
        <img className='w-[150px]' src={profilePic} alt='' />
        </div>
        <div className="hero-content mt-4 text-center">
          <h1 className='text-4xl font-bold'>Bolby Doe</h1>
          <p className='text-xl mt-3'>i am Developer</p>
          <div className="hero-icons flex items-center mt-4 ">
            <a href='#' className='px-4 text-2xl hover:text-[#FFD15C]'><FaInstagram /></a>
            <a href='#' className='px-4 text-2xl hover:text-[#FFD15C]'><FaTwitter /></a>
            <a href='#' className='px-4 text-2xl hover:text-[#FFD15C]'><FaBehance /></a>
            <a href='#' className='px-4 text-2xl hover:text-[#FFD15C]'><FaDribbble /></a>
            <a href='#' className='px-4 text-2xl hover:text-[#FFD15C]'><FaPinterestP /></a>
          </div>
          <button className='mt-8 btn-default rounded-full'><a href='#'>Hire Me</a></button>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home;