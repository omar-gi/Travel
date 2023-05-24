import Hero     from '../components/Hero';
import Navbar   from '../components/Navbar';
import aboutImg from "../assets/dref.jpg";
import Footer from '../components/Footer';
import Trip from '../components/Trip';

const Service = () => {
  return (
    <>
       <Navbar/>
          <Hero 
          cName="hero-mid"
          heroImg = {aboutImg}
          title="Service"
      
          btnClass="hide"
          />

          <Trip/>
          <Footer/>
    </>
  )
}

export default Service