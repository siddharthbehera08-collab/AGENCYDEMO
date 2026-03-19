import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-surface border border-border px-4 py-2 rounded-full mb-6">
            <span className="text-secondary text-sm font-medium">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            We build digital experiences that matter
          </h2>
          
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            Our team of expert designers and developers are dedicated to crafting thoughtful and impactful digital products. We blur the line between strategy, design, and technology.
          </p>
          <p className="text-lg text-secondary mb-10 leading-relaxed">
            By focusing on user-centered design and cutting-edge web technologies, we achieve remarkable results that fuel growth for modern brands.
          </p>
          
          <button className="px-8 py-4 bg-transparent border border-border text-primary rounded-full font-medium hover:bg-surface hover:border-gray-300 transition-all flex items-center space-x-2">
            <span>Read More</span>
            <span className="text-xl">→</span>
          </button>
        </motion.div>

        {/* Right Client Grid */}
        <motion.div 
          className="lg:w-1/2 w-full grid grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-surface rounded-2xl flex border border-border items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center opacity-70">
                <span className="text-xs font-bold text-gray-400">LOGO</span>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
