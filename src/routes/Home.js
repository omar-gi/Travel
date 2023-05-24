import React from 'react';
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';



function Home (){
  return (
    <>
          <Navbar/>
          <Hero 
          cName="hero"
          heroImg="https://images.pexels.com/photos/7925853/pexels-photo-7925853.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="Your journey Your story"
          text="Choose Your Favourite Destination"
          buttonText="Travel Plan"
          url="/"
          btnClass="show"
          />
          <Destination/>
          <Trip/>
          <Footer/>
    </>
  )
}

export default Home