import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Working with Agency Hub completely transformed our online presence. Their design team captured our brand perfectly has doubled our conversion rate.",
      name: "Sarah Jenkins",
      role: "CMO at TechFlow",
      avatar: "SJ"
    },
    {
      id: 2,
      text: "The web development process was incredibly smooth. They understood our complex requirements and delivered a seamless application ahead of schedule.",
      name: "Marcus Cole",
      role: "Founder, Loop Inc",
      avatar: "MC"
    },
    {
      id: 3,
      text: "Unmatched attention to detail. Every interaction, every animation, and every layout decision feels deliberate and premium. Truly a world-class agency partner.",
      name: "Elena Rostova",
      role: "Product Lead, Innovate",
      avatar: "ER"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Quote className="w-20 h-20 text-accent/20 mx-auto mb-10" />
        
        <div className="relative min-h-[250px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full"
            >
              <h3 className="text-2xl md:text-4xl text-primary font-medium leading-relaxed mb-12">
                "{testimonials[currentIndex].text}"
              </h3>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center text-secondary font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-primary text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-secondary">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-6 mt-16">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary hover:bg-surface hover:text-accent transition-all hover:scale-105"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-accent w-8' : 'bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary hover:bg-surface hover:text-accent transition-all hover:scale-105"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
