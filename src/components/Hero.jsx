import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const headlineContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12
      }
    }
  };

  const headlineWordVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <motion.div 
        className="text-center max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-surface border border-border px-4 py-2 rounded-full mb-8">
          <span className="text-accent text-lg">✦</span>
          <span className="text-sm font-medium text-primary">Single Subscription · Unlimited Design</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6"
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

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          We help ambitious brands and startups create high-converting websites and scalable design systems that stand out.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-surface text-primary rounded-full font-medium hover:bg-gray-100 transition-colors border border-border flex items-center justify-center space-x-2">
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-primary border-b-4 border-b-transparent ml-1"></div>
            </span>
            <span>Watch Showreel</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Hero Visual Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-6xl mx-auto h-[400px] md:h-[500px] bg-primary rounded-2xl md:rounded-[40px] mt-16 relative overflow-hidden flex items-center justify-center"
      >
        {/* Abstract Floating Object */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[40%] bg-gradient-to-br from-accent to-purple-400 blur-sm opacity-90 animate-float mix-blend-screen shadow-[0_0_100px_rgba(79,70,229,0.8)]"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-accent blur-md opacity-70 animate-float mix-blend-screen shadow-[0_0_80px_rgba(236,72,153,0.6)]" style={{ animationDelay: '2s' }}></div>
      </motion.div>
      
    </section>
  );
}
