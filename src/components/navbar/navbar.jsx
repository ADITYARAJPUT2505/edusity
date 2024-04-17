import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' :''}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>AboutUs</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li className="btn">Contact Us</li>
      </ul>
    </nav>
  );
};

export default navbar;
