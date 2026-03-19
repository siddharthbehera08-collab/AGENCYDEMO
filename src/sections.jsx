import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Menu,
  X,
  MonitorSmartphone,
  LayoutGrid,
  Rocket,
  Megaphone,
  Quote,
  ChevronLeft,
  ChevronRight,
  Check,
  Plus,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react';

/* Scroll progress bar - premium feature, lightweight */
export function ScrollProgress() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollY(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${scrollY}%` }}
      role="progressbar"
      aria-valuenow={Math.round(scrollY)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 border-border shadow-sm'
          : 'bg-white/80 border-b-[0.5px] border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              AGENCY HUB
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-primary hover:text-accent transition-colors duration-200">
              Home
            </a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors duration-200">
              Works
            </a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors duration-200">
              About
            </a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="font-medium text-secondary hover:text-accent transition-colors duration-200">
              Blog
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="btn-hover bg-primary text-white px-6 py-3 rounded-full hover:bg-gray-800 font-medium shadow-md">
              Contact Us
            </button>
          </div>

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

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-screen bg-white flex flex-col items-center pt-20 space-y-8 z-40 border-t border-border">
          <a
            href="#"
            className="text-2xl font-medium text-primary hover:text-accent transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-2xl font-medium text-secondary hover:text-accent transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Works
          </a>
          <a
            href="#"
            className="text-2xl font-medium text-secondary hover:text-accent transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-2xl font-medium text-secondary hover:text-accent transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-2xl font-medium text-secondary hover:text-accent transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <button className="btn-hover bg-primary text-white px-8 py-4 rounded-full hover:bg-gray-800 text-xl font-medium mt-8 w-11/12 shadow-md">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const headlineContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const headlineWordVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="text-center max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-surface border border-border px-4 py-2 rounded-full mb-8"
        >
          <span className="text-accent text-lg">✦</span>
          <span className="text-sm font-medium text-primary">Single Subscription · Unlimited Design</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6"
        >
          {prefersReducedMotion ? (
            <>
              Ideas Born,<br className="hidden sm:block" />
              Digitally Brought Alive
            </>
          ) : (
            <motion.span
              className="block"
              variants={headlineContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="block">
                {['Ideas', 'Born,'].map((word) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-[0.25em]"
                    variants={headlineWordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
                <br className="hidden sm:block" />
              </span>
              <span className="block">
                {['Digitally', 'Brought', 'Alive'].map((word, idx, arr) => (
                  <motion.span
                    key={word}
                    className={idx === arr.length - 1 ? 'inline-block' : 'inline-block mr-[0.25em]'}
                    variants={headlineWordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.span>
          )}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-secondary/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We help ambitious brands and startups create high-converting websites and scalable design systems that
          stand out.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button className="btn-hover w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-gray-800 shadow-lg">
            Get Started
          </button>
          <button className="btn-hover w-full sm:w-auto px-8 py-4 bg-surface text-primary rounded-full font-medium hover:bg-gray-100 border border-border flex items-center justify-center space-x-2">
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-primary border-b-4 border-b-transparent ml-1" />
            </span>
            <span>View Demo</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-6xl mx-auto h-[400px] md:h-[500px] bg-primary rounded-2xl md:rounded-[40px] mt-16 relative overflow-hidden flex items-center justify-center"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[40%] bg-gradient-to-br from-accent to-purple-400 blur-sm opacity-90 animate-float mix-blend-screen shadow-[0_0_100px_rgba(79,70,229,0.8)]" />
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-accent blur-md opacity-70 animate-float mix-blend-screen shadow-[0_0_80px_rgba(236,72,153,0.6)]"
          style={{ animationDelay: '2s' }}
        />
      </motion.div>
    </section>
  );
}

export function BrandLogos() {
  const brands = ['LOCCO', 'LUMO', 'IPSUM', 'BOGO', 'NOTION', 'LOOP', 'LOGICNOW'];

  return (
    <section className="bg-surface py-20 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-medium text-secondary/90 mb-10 uppercase tracking-widest">
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

const logos = [
  { id: 1, name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: 2, name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { id: 3, name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { id: 4, name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { id: 5, name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { id: 6, name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { id: 7, name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
  { id: 8, name: 'Adobe', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg' },
];

export function LogoCarousel() {
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by Innovative Companies
        </h2>
      </div>

      <div className="w-full overflow-hidden hover:overflow-x-auto group cursor-grab active:cursor-grabbing no-scrollbar logo-carousel-mask relative">
        <div className="flex items-center gap-16 pr-16 w-max animate-scroll group-hover:[animation-play-state:paused] will-change-transform px-8 pb-4">
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px] transition-all duration-300 transform opacity-60 hover:opacity-100 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-opacity duration-300"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight break-words">
            We build digital experiences that matter
          </h2>

          <p className="text-lg text-secondary mb-6 leading-relaxed">
            Our team of expert designers and developers are dedicated to crafting thoughtful and impactful digital
            products. We blur the line between strategy, design, and technology.
          </p>
          <p className="text-lg text-secondary mb-10 leading-relaxed">
            By focusing on user-centered design and cutting-edge web technologies, we achieve remarkable results that
            fuel growth for modern brands.
          </p>

          <button className="btn-hover px-8 py-4 bg-transparent border border-border text-primary rounded-full font-medium hover:bg-surface hover:border-gray-300 flex items-center space-x-2">
            <span>Read More</span>
            <span className="text-xl">→</span>
          </button>
        </motion.div>

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
              className="aspect-square bg-surface rounded-2xl flex border border-border items-center justify-center hover:shadow-lg hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center opacity-70">
                <span className="text-xs font-bold text-gray-400">Partner</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: 'UI/UX Design',
      desc: 'Creating beautiful, intuitive interfaces that delight users and drive engagement.',
      icon: <LayoutGrid className="w-8 h-8 text-accent" />,
    },
    {
      title: 'Web Development',
      desc: 'Building scalable, fast, and accessible web applications using modern stacks.',
      icon: <MonitorSmartphone className="w-8 h-8 text-accent" />,
    },
    {
      title: 'App Development',
      desc: 'Developing seamless cross-platform mobile experiences for iOS and Android.',
      icon: <Rocket className="w-8 h-8 text-accent" />,
    },
    {
      title: 'Digital Marketing',
      desc: 'Driving growth through data-backed marketing strategies and campaigns.',
      icon: <Megaphone className="w-8 h-8 text-accent" />,
    },
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
              className="bg-white p-10 rounded-[32px] border border-border hover:border-accent hover:-translate-y-2 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-pointer"
            >
              <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-300">
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

export function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: 'Working with Agency Hub completely transformed our online presence. Their design team captured our brand perfectly and the new site has doubled our conversion rate.',
      name: 'Sarah Jenkins',
      role: 'CMO at TechFlow',
      avatar: 'SJ',
    },
    {
      id: 2,
      text: 'The web development process was incredibly smooth. They understood our complex requirements and delivered a seamless application ahead of schedule.',
      name: 'Marcus Cole',
      role: 'Founder, Loop Inc',
      avatar: 'MC',
    },
    {
      id: 3,
      text: 'Unmatched attention to detail. Every interaction, every animation, and every layout decision feels deliberate and premium. Truly a world-class agency partner.',
      name: 'Elena Rostova',
      role: 'Product Lead, Innovate',
      avatar: 'ER',
    },
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

        <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute w-full"
            >
              <div className="relative flex items-center justify-center">
                {/* Left navigation arrow aligned to card (pushed further out, lower opacity) */}
                <button
                  onClick={prevSlide}
                  className="hidden sm:flex absolute left-[-4.5rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border items-center justify-center text-primary bg-white/80 hover:bg-surface hover:text-accent transition-all hover:scale-105 shadow-sm opacity-50 hover:opacity-80"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="bg-white/60 backdrop-blur-sm border border-border rounded-3xl p-[37px] md:p-[53px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
                  <h3 className="text-2xl md:text-4xl text-primary font-medium leading-relaxed mb-10 break-words px-2 sm:px-0">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </h3>

                  {/* Subtle background quote mark above and below text */}
                  <Quote className="w-10 h-10 text-accent/10 mx-auto mb-4" />

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center text-secondary font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-primary text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-secondary">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>

                  <Quote className="w-10 h-10 text-accent/10 mx-auto mt-4" />
                </div>

                {/* Right navigation arrow aligned to card (pushed further out, lower opacity) */}
                <button
                  onClick={nextSlide}
                  className="hidden sm:flex absolute right-[-4.5rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border items-center justify-center text-primary bg-white/80 hover:bg-surface hover:text-accent transition-all hover:scale-105 shadow-sm opacity-50 hover:opacity-80"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators centered below card */}
        <div className="flex items-center justify-center mt-10">
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-accent w-8' : 'bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Subscribe',
      desc: "Choose a plan that fits your needs. You'll get access to your dedicated Trello board immediately.",
    },
    {
      number: '02',
      title: 'Request',
      desc: "Add as many design requests to your board as you'd like. We'll work through them one by one.",
    },
    {
      number: '03',
      title: 'Project',
      desc: "Receive your designs within a few business days on average. We'll revise until you're 100% satisfied.",
    },
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
          <div className="hidden md:block absolute top-[10%] bottom-[10%] left-1/3 w-[1px] bg-border" />
          <div className="hidden md:block absolute top-[10%] bottom-[10%] left-2/3 w-[1px] bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="px-0 md:px-12 flex flex-col items-center md:items-start text-center md:text-left relative hover:-translate-y-1 transition-transform duration-300"
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

export function Pricing() {
  const features = [
    'Unlimited Requests',
    'Unlimited Revisions',
    'Unlimited Team Members',
    'Unlimited Storage',
    'Pause anytime',
    'Dedicated Slack Channel',
    'Source Files Included',
    'Cancel anytime',
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
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent opacity-10 blur-3xl rounded-full pointer-events-none" />

          <div className="w-full md:w-1/2 flex flex-col justify-between relative z-10">
            <div>
              <div className="inline-block px-4 py-2 bg-white border border-border rounded-full text-sm font-semibold text-primary mb-8 tracking-wide">
                Monthly Pack
              </div>
              <h3 className="text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tighter">
                $4,999.90 <span className="text-2xl text-secondary font-medium tracking-normal">/ mo</span>
              </h3>
              <p className="text-secondary text-lg mb-12">
                Pause or cancel anytime. First design delivered within 48 hours.
              </p>
            </div>

            <button className="btn-hover w-full py-5 bg-primary text-white text-lg font-medium rounded-2xl hover:bg-gray-800 shadow-lg hover:shadow-xl">
              Get Started Now
            </button>
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            <h4 className="text-xl font-semibold text-primary mb-8 border-b border-border pb-4">
              What's included
            </h4>
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

export function FAQ() {
  const faqs = [
    {
      q: 'How fast will I receive my designs?',
      a: "On average, you'll receive your designs within 48-72 hours. More complex requests like full app designs may take a bit longer, but we'll always keep you updated.",
    },
    {
      q: 'Is there a limit to how many requests I can make?',
      a: "No! Once subscribed, you're able to add as many design requests to your queue as you'd like. We will process them one by one.",
    },
    {
      q: "What if I don't like the design?",
      a: "We offer unlimited revisions. We'll continue to refine the design until you are 100% satisfied with the outcome.",
    },
    {
      q: 'How do I pause or cancel my subscription?',
      a: 'You can pause or cancel your subscription at any time through your billing portal. No questions asked.',
    },
    {
      q: 'What software do you use?',
      a: 'We primarily design in Figma for web and product design, and use the Adobe Creative Suite for branding, illustration, and motion graphics.',
    },
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
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md ${
                openIndex === i ? 'border-accent shadow-md' : 'border-border hover:border-gray-300'
              }`}
            >
              <button
                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="text-xl font-medium text-primary pr-8">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? 'border-accent bg-accent text-white rotate-45' : 'border-border text-primary'
                  }`}
                >
                  <Plus size={18} />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
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

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div>
            <a
              href="#"
              className="text-3xl font-bold tracking-tighter text-primary inline-block mb-6"
            >
              AGENCY HUB
            </a>
            <p className="text-secondary mb-8 text-lg max-w-sm">
              We create digital experiences that blend strategic thinking, bold design, and cutting-edge technology.
            </p>
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Say Hello
              </div>
              <a
                href="mailto:hello@agencyhub.com"
                className="text-xl font-medium text-accent hover:text-indigo-700 transition-colors"
              >
                hello@agencyhub.com
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-primary mb-2">Navigation</h4>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors duration-200 w-fit hover:underline underline-offset-2">
              Home
            </a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors duration-200 w-fit hover:underline underline-offset-2">
              Works
            </a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors duration-200 w-fit hover:underline underline-offset-2">
              About
            </a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors duration-200 w-fit hover:underline underline-offset-2">
              Pricing
            </a>
            <a href="#" className="text-secondary hover:text-accent font-medium transition-colors duration-200 w-fit hover:underline underline-offset-2">
              Blog
            </a>
          </div>

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

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-secondary text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Agency Hub. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors duration-200 hover:underline underline-offset-2">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200 hover:underline underline-offset-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

