import React from 'react';

const Card = (props) => {
  return (
    <>
    <div className="timeline-item mb-8 relative ml-9">
      <i className='absolute top-0 -left-14 text-2xl p-2 z-10 bg-white text-[#FF4C60]'>{props.icon}</i>
      <span className='mb-3 text-[#8B88B1] text-sm '>{props.year}</span>
      <h4 className='text-xl font-bold mb-3'>{props.title}</h4>
      <p className='text-[#8B88B1]'>{props.desc}</p>
      
    </div>
    </>
  )
}

export default Card;