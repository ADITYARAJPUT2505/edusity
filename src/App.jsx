import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Program from "./components/programs/programs";
import Title from "./components/title/title"
import About from "./components/about/about"
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
      </div>     
    </div>
  )
};

export default App;
