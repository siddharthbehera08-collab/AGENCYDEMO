import React from 'react';
import { motion } from 'framer-motion';

export default function BrandLogos() {
  const brands = ['LOCCO', 'LUMO', 'IPSUM', 'BOGO', 'NOTION', 'LOOP', 'LOGICNOW'];

  return (
    <section className="bg-surface py-20 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-medium text-secondary mb-10 uppercase tracking-widest">
          Trusted by leading brands
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-gray-400 font-inter tracking-tighter"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
