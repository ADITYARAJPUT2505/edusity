import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
const navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>AboutUs</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li className='btn'>Contact Us</li>
        </ul>
    </nav>
  )
}

export default navbar