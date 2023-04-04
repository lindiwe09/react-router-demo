import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import PricingPage from './components/PricingPage';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className='App'>
           <Navbar/>
           <Routes>
           <Route path="/home"  element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/pricingpage" element={<PricingPage/>}/>
           <Route path="/herosection" element={<HeroSection/>}/>
           </Routes>
           <Footer/>
        </div>
   </Router>
  );
}
 const Home = () => (
  <div class=" sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
    <h1 className='text-center text-7xl font-extrabold mt-5 mb-20 animate-pulse'>Hello React-Router</h1>
      <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl"/>
    </div>
  
  
  
 );
export default App;
