import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact initialSelectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
