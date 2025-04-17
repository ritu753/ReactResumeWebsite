import React, { useState } from 'react';
import Menu from "./Menu";
import { FaLink } from "react-icons/fa6";

const Projects = () => {
  const[items, setItems] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState("Everything");
  
  const filterItem = (category) => {
    setActiveCategory(category);
    if (category === "Everything") {
      setItems(Menu);
    } else {
      const updatedItems = Menu.filter((elem) => elem.category === category);
      setItems(updatedItems);
    }
  };
  
  
  return (
    <>
    <section className="work" id="work">
    <div className="section-title"><h2>Recent Works</h2> </div>
    <div className="project-container">
      <div className="filter-btn-cont flex flex-wrap justify-start items-center">
      <button
  className={`filter-btn mr-4 font-bold px-4 hover:text-[#FF4C60] ${activeCategory === "Everything" ? "text-[#FF4C60]" : ""}`}
  onClick={() => filterItem("Everything")}
>
  Everything
</button>
<button
  className={`filter-btn mr-4 font-bold px-4 hover:text-[#FF4C60] ${activeCategory === "Creative" ? "text-[#FF4C60]" : ""}`}
  onClick={() => filterItem("Creative")}
>
  Creative
</button>
<button
  className={`filter-btn mr-4 font-bold px-4 hover:text-[#FF4C60] ${activeCategory === "Art" ? "text-[#FF4C60]" : ""}`}
  onClick={() => filterItem("Art")}
>
  Art
</button>
<button
  className={`filter-btn mr-4 font-bold px-4 hover:text-[#FF4C60] ${activeCategory === "Design" ? "text-[#FF4C60]" : ""}`}
  onClick={() => filterItem("Design")}
>
  Design
</button>
<button
  className={`filter-btn mr-4 font-bold px-4 hover:text-[#FF4C60] ${activeCategory === "Branding" ? "text-[#FF4C60]" : ""}`}
  onClick={() => filterItem("Branding")}
>
  Branding
</button>



      </div>
      <div className="project-img-cont mt-8 flex justify-center flex-wrap">
        {items.map((elem)=>{
          const {id,image, title,category} = elem;
          return(
          <div className="card group w-[320px] mr-4 shadow-2xl mb-4 mt-4 rounded-2xl relative overflow-hidden cursor-pointer transition-all" key={id}>
            <div className="work-img relative">
              <img src={image} className='w-full h-[auto] rounded-2xl transition-all' />
              <div className="mask absolute w-full h-full bg-[#6C6CE5] top-0 left-0 rounded-2xl transition-all opacity-0 group-hover:opacity-80"></div>
            </div>
            <div className="work-info transition-all">
              <span className='absolute top-0 left-6 bg-[#FF4C60] text-white p-1 rounded-b-xl -translate-y-9 transition-all duration-500 group-hover:translate-y-0'>{category}</span>
              <h4 className='absolute top-20 left-6 font-bold text-xl text-white opacity-0 translate-y-6 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 '>{title}</h4>
              <a href='#' className='absolute bottom-8 left-6 w-10 h-10 bg-yellow-300 text-white text-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500'><FaLink /></a>
            </div>
          </div>
          )
        })};
           
      </div>
    </div>
      </section></>
  )
}

export default Projects