import React from 'react';
import Data from './Data';
import Card from './Card';
import "./Experience.css";


const Experience = () => {
  return (
    <>
    <section className='experience' id='experience'>
    <div className="section-title"><h2>Experience</h2> </div>
    <div className="resume-container flex items-stretch flex-wrap justify-stretch">
      <div className='time-cont bg-white p-6 shadow-2xl mr-4 rounded-2xl relative w-[46%]'>
      {Data.map((val ,id) => {
          if(val.category === "education"){
            return(
            <Card key={id} icon={val.icon} title={val.title} year={val.year} desc ={val.desc} />
            
            )
          }
      })}
      <span className='line'></span>
      </div>

      <div className='time-cont bg-white p-6 shadow-2xl mr-4 rounded-2xl relative w-[46%]'>
      {Data.map((val ,index) => {
          if(val.category === "experience"){
            return(
            <Card key={index} icon={val.icon} title={val.title} year={val.year} desc ={val.desc} />
            )
          }
      })}
      <span className='line'></span>
      </div>
      
    </div>

    </section>
    </>
  )
}

export default Experience;