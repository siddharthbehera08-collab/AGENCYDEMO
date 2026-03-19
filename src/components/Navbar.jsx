import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b-[0.5px] border-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter">AGENCY HUB</a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-primary hover:text-accent transition-colors">Home</a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors">Works</a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors">About</a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors">Pricing</a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors">Blog</a>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-primary hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-screen bg-white flex flex-col items-center pt-20 space-y-8 z-40 border-t border-border">
          <a href="#" className="text-2xl font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="text-2xl font-medium text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Works</a>
          <a href="#" className="text-2xl font-medium text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="text-2xl font-medium text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#" className="text-2xl font-medium text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Blog</a>
          <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-xl font-medium mt-8 w-11/12">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
