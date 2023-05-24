import Hero     from '../components/Hero';
import Navbar   from '../components/Navbar';
import aboutImg from "../assets/dref.jpg";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About ()  {
  return (
    <>
     <Navbar/>
          <Hero cName="hero-mid" heroImg = {aboutImg} title="About" btnClass="hide" />
          <AboutUs/>
          <Footer/>
          </>
  )
}

export default About