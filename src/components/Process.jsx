import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Subscribe",
      desc: "Choose a plan that fits your needs. You'll get access to your dedicated Trello board immediately."
    },
    {
      number: "02",
      title: "Request",
      desc: "Add as many design requests to your board as you'd like. We'll work through them one by one."
    },
    {
      number: "03",
      title: "Project",
      desc: "Receive your designs within a few business days on average. We'll revise until you're 100% satisfied."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">How It Works</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A simple, transparent process designed to give you exactly what you need, when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative">
          
          {/* Desktop Dividers */}
          <div className="hidden md:block absolute top-[10%] bottom-[10%] left-1/3 w-[1px] bg-border" />
          <div className="hidden md:block absolute top-[10%] bottom-[10%] left-2/3 w-[1px] bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="px-0 md:px-12 flex flex-col items-center md:items-start text-center md:text-left relative"
            >
              <span className="text-6xl md:text-8xl font-bold text-gray-200 mb-8 font-inter tracking-tighter">
                {step.number}
              </span>
              <h3 className="text-2xl font-semibold text-primary mb-4">{step.title}</h3>
              <p className="text-secondary text-lg leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
