import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Unlimited Requests",
    "Unlimited Revisions",
    "Unlimited Team Members",
    "Unlimited Storage",
    "Pause anytime",
    "Dedicated Slack Channel",
    "Source Files Included",
    "Cancel anytime"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">Simple Pricing</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            One flat fee. No hidden costs. Unlimited possibilities.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-surface border border-border rounded-[40px] p-8 md:p-14 flex flex-col md:flex-row gap-12 lg:gap-24 relative overflow-hidden"
        >
          {/* Subtle gradient glow inside card */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent opacity-10 blur-3xl rounded-full pointer-events-none"></div>

          {/* Left Side: Pricing details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between relative z-10">
            <div>
              <div className="inline-block px-4 py-2 bg-white border border-border rounded-full text-sm font-semibold text-primary mb-8 tracking-wide">
                Monthly Pack
              </div>
              <h3 className="text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tighter">
                $4,999.90 <span className="text-2xl text-secondary font-medium tracking-normal">/ mo</span>
              </h3>
              <p className="text-secondary text-lg mb-12">
                Pause or cancel anytime. Get your first design within 48 hours.
              </p>
            </div>
            
            <button className="w-full py-5 bg-primary text-white text-lg font-medium rounded-2xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Get Started Now
            </button>
          </div>

          {/* Right Side: Features List */}
          <div className="w-full md:w-1/2 relative z-10">
            <h4 className="text-xl font-semibold text-primary mb-8 border-b border-border pb-4">What's included</h4>
            <ul className="space-y-5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-accent stroke-[3]" />
                  </div>
                  <span className="text-primary font-medium text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
