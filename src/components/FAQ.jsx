import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How fast will I receive my designs?",
      a: "On average, you'll receive your designs within 48-72 hours. More complex requests like full app designs may take a bit longer, but we'll always keep you updated."
    },
    {
      q: "Is there a limit to how many requests I can make?",
      a: "No! Once subscribed, you're able to add as many design requests to your queue as you'd like. We will process them one by one."
    },
    {
      q: "What if I don't like the design?",
      a: "We offer unlimited revisions. We'll continue to refine the design until you are 100% satisfied with the outcome."
    },
    {
      q: "How do I pause or cancel my subscription?",
      a: "You can pause or cancel your subscription at any time through your billing portal. No questions asked."
    },
    {
      q: "What software do you use?",
      a: "We primarily design in Figma for web and product design, and use the Adobe Creative Suite for branding, illustration, and motion graphics."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-accent shadow-md' : 'border-border hover:border-gray-300'}`}
            >
              <button 
                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="text-xl font-medium text-primary pr-8">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'border-accent bg-accent text-white rotate-45' : 'border-border text-primary'}`}>
                  <Plus size={18} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-secondary text-lg leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
