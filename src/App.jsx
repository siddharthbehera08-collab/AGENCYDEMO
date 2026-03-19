import React from 'react';
import {
  Navbar,
  Hero,
  BrandLogos,
  LogoCarousel,
  About,
  Services,
  Testimonial,
  Process,
  Pricing,
  FAQ,
  Footer,
} from './sections';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter selection:bg-accent selection:text-white pb-32">
      <Navbar />
      <Hero />
      <BrandLogos />
      <LogoCarousel />
      <About />
      <Services />
      <Testimonial />
      <Process />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
