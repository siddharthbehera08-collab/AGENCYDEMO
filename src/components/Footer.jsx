import React from 'react';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Left Column */}
          <div>
            <a href="#" className="text-3xl font-bold tracking-tighter text-primary inline-block mb-6">AGENCY HUB</a>
            <p className="text-secondary mb-8 text-lg max-w-sm">
              We create digital experiences that blend strategic thinking, bold design, and cutting-edge technology.
            </p>
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Say Hello</div>
              <a href="mailto:hello@agencyhub.com" className="text-xl font-medium text-accent hover:text-indigo-700 transition-colors">
                hello@agencyhub.com
              </a>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-primary mb-2">Navigation</h4>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors w-fit">Home</a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors w-fit">Works</a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors w-fit">About</a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors w-fit">Pricing</a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors w-fit">Blog</a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-primary mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit our Twitter page"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary hover:bg-surface hover:text-accent hover:border-accent transition-all duration-300 hover:scale-[1.2] hover:opacity-80"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary hover:bg-surface hover:text-accent hover:border-accent transition-all duration-300 hover:scale-[1.2] hover:opacity-80"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary hover:bg-surface hover:text-accent hover:border-accent transition-all duration-300 hover:scale-[1.2] hover:opacity-80"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary hover:bg-surface hover:text-accent hover:border-accent transition-all duration-300 hover:scale-[1.2] hover:opacity-80"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-secondary text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Agency Hub. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
