import React from 'react';
import { Youtube, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">CodeYourMind</h3>
            <p className="text-slate-400 max-w-sm">
              Bridging the gap between cognitive science and practical application. 
              Program your success today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Youtube /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#topics" className="hover:text-white transition-colors">Topics</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Free Resources</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">Cognitive Quiz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Weekly Brain Boost</h4>
            <p className="text-slate-400 mb-4 text-sm">Join 15,000+ others receiving our weekly cognitive algorithms.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary text-white"
              />
              <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Code Your Mind with Xujun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};