import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Program from "./components/programs/programs";
import Title from "./components/title/title"
import About from "./components/about/about"
import Campus from './components/campus/campus'
import Testimonials from "./components/testimonials/testimonials";
import Contact from './components/contact/contact'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer' />
        <Program />
        <About/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says' />
        <Testimonials/>
        <Title subTitle='contact us' title='Get In Touch' />
        <Contact/>
      </div>     
    </div>
  )
};

export default App;
