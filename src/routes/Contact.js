import Hero     from '../components/Hero';
import Navbar   from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <>
   <Navbar/>
          <Hero 
          cName="hero-mid"
          heroImg = "https://cdn.pixabay.com/photo/2017/08/24/05/21/pyramid-2675466__480.jpg"
          title="Contact"
      
          btnClass="hide"
          />
          <ContactForm/>
          <Footer/>
    </>
  )
}

export default Contact