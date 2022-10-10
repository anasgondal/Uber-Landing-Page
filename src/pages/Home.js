import React from "react";
import globe from '../images/globe.svg'
import Hero from "../Components/Hero";
import UberBusiness from "../Components/UberBusiness";
import Safety from "../Components/Safety";
import About from "../Components/About";
import Navbar from "../Components/Navbar";
import Download from "../Components/Download";
import Drive from "../Components/Drive";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
    <Navbar/>
      <Hero/>
      <UberBusiness/>
      <Safety/>
      <About/>
      <Download/>
      <Drive/>
      <Footer/>
    </>
  );
}
export default Home