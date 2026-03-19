import React from 'react';
import {
  Navbar,
  Hero,
  ScrollProgress,
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
    <div className="min-h-screen bg-white font-inter selection:bg-accent selection:text-white pb-32 overflow-x-hidden">
      <ScrollProgress />
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
