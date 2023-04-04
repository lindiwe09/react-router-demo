import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=' bg-teal-400 flex  h-24 min-h-[10vh]'>
        <img className=' w-30 h-24' src="https://media.istockphoto.com/id/183412466/photo/eastern-bluebirds-male-and-female.jpg?s=612x612&w=0&k=20&c=6_EQHnGedwdjM9QTUF2c1ce7cC3XtlxvMPpU5HAouhc="/>
        <ul className='flex justify-around items-center w-2/5 list-none'>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/herosection">
            <li>HeroSection</li>
         </Link>
            <Link  to="/pricingpage">
            <li>PricingPage</li>
            </Link>
        </ul>
    </nav>
  )
}
