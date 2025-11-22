import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Properties from './components/properties/properties.jsx'
import CorporateSection from './components/corporate.jsx'
import Testimonials from './components/testimonials.jsx'
// import ContactForm from './components/contactForm.jsx'
import Footer from './components/footer.jsx'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <CorporateSection />
      <Testimonials />
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}

export default App;
