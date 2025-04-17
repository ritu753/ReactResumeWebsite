import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Price from "./Components/Price/Price";
import Testimonials from "./Components/Testimonials/Testimonials";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";


function App() {

  return (
    <>
      <Sidebar />
      <div className="main-container">
      <Home />
      <About />
      <Service />
      <Experience />
      <Projects />
      <Price />
      <Testimonials />
      <Blog />
      <Contact />
      </div>
    </>
  )
};

export default App;
