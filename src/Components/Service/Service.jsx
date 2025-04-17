import React from 'react';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';
import "./Service.css";


const serviceData = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Service = () => {
  return (
    <>
    <section className='service' id='service'>
    <div className="section-title"><h2>Service</h2> </div>
    <div className="service-cont">
      <div className="row flex items-center justify-center flex-wrap">
       { serviceData.map((data) => (
        <div key={data.id} className="sevice-info rounded-xl shadow-xl mr-5 p-5 text-center mb-8 w-[315px]">
          <div className="ser-img flex items-center justify-center"><img className='mb-5' src={data.image} alt='' /></div>
          <h4 className='mb-5 text-xl font-bold' >{data.title}</h4>
          <p className='mb-5'>{data.description}</p>
        </div>
        )
        
        )};
      </div>
    </div>
    </section></>
  )
};

export default Service;