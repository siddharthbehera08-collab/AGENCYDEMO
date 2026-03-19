import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, LayoutGrid, Rocket, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'UI/UX Design',
      desc: 'Creating beautiful, intuitive interfaces that delight users and drive engagement.',
      icon: <LayoutGrid className="w-8 h-8 text-accent" />
    },
    {
      title: 'Web Development',
      desc: 'Building scalable, fast, and accessible web applications using modern stacks.',
      icon: <MonitorSmartphone className="w-8 h-8 text-accent" />
    },
    {
      title: 'App Development',
      desc: 'Developing seamless cross-platform mobile experiences for iOS and Android.',
      icon: <Rocket className="w-8 h-8 text-accent" />
    },
    {
      title: 'Digital Marketing',
      desc: 'Driving growth through data-backed marketing strategies and campaigns.',
      icon: <Megaphone className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">Our Services</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[32px] border border-border hover:border-accent hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl group cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-secondary text-lg leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
