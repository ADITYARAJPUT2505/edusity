import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Program from "./components/programs/programs";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Program />
      </div>
    </div>
  )
};

export default App;
