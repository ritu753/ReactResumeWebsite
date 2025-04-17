import React, { useState, useEffect } from 'react';
import {
  IoHomeOutline,
  IoMenu,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { FiUserCheck, FiLayers } from "react-icons/fi";
import { SlBriefcase } from "react-icons/sl";
import { PiGraduationCapLight, PiNotePencilDuotone } from "react-icons/pi";
import "./Sidebar.css";
import logo from '../../assets/desk-logo.svg';

const Menu = [
  { id: 1, name: "Home", link: "#home", icon: <IoHomeOutline /> },
  { id: 2, name: "About", link: "#about", icon: <FiUserCheck /> },
  { id: 3, name: "Service", link: "#service", icon: <SlBriefcase /> },
  { id: 4, name: "Experience", link: "#experience", icon: <PiGraduationCapLight /> },
  { id: 5, name: "Work", link: "#work", icon: <FiLayers /> },
  { id: 6, name: "Blog", link: "#blog", icon: <PiNotePencilDuotone /> },
  { id: 7, name: "Contact", link: "#contact", icon: <IoChatbubblesOutline /> },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(1);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleClick = (id) => {
    setActiveSection(id);
    setIsSidebarOpen(false); // Close sidebar on mobile when clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      Menu.forEach(item => {
        const section = document.querySelector(item.link);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <aside className={`fixed top-0 left-0 z-30 w-[250px] h-full flex flex-col items-center overflow-y-auto text-center bg-[#353353] text-white border-r-2 border-r-[rgba(255,255,255,0.1)] ${isSidebarOpen ? 'nav-active' : ''}`}>
        <div className="logo px-8 mt-12">
          <a href='#' className='w-[200px] h-[100px]'>
            <img src={logo} alt='Logo' />
          </a>
        </div>
        <nav className="navbar mt-[130px] mb-[130px]">
          <ul>
            {Menu.map((data) => (
              <li key={data.id} className='mb-4 px-8'>
                <a
                  href={data.link}
                  onClick={() => handleClick(data.id)}
                  className={`flex items-center font-bold text-base transition-colors duration-300 ${activeSection === data.id ? 'text-[#FFD15C]' : 'hover:text-[#FFD15C]'}`}
                >
                  <span className='mr-4 text-[#FFD15C] text-xl'>{data.icon}</span> {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-footer mt-auto mb-8 text-[#9C9AB3] text-sm">
          <a href='#'>© 2020 Bolby Template.</a>
        </div>
      </aside>

      <div className={`fixed top-0 left-0 right-0 bg-[#353353] px-6 py-2 mob-nav z-50 ${isSidebarOpen ? 'nav-active' : ''}`}>
        <div className="mob-nav flex items-center text-white">
          <i className='text-[3rem] mr-3 cursor-pointer' onClick={toggleSidebar}><IoMenu /></i>
          <img src={logo} alt='Logo' />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
