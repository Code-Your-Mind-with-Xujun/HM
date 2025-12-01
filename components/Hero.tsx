import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, PlayCircle, BrainCircuit } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden neural-bg">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-xl">
             <BrainCircuit className="w-16 h-16 text-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          Code Your Mind <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            With Xujun
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300"
        >
          Intelligence isn't just genetic... it's programmable. 
          Learn from past geniuses and structure your mind for success in daily life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="https://youtube.com/@CodeYourMindWithXujun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Subscribe on YouTube
          </a>
          <button 
            onClick={() => scrollTo('#quiz')}
            className="flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:scale-105"
          >
            Take the Quiz
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <ChevronDown className="h-8 w-8 text-slate-400" />
      </motion.div>
    </section>
  );
};