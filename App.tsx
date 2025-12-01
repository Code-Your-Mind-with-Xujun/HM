import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import Section from './components/ui/Section';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { TOPICS, VIDEOS, RESOURCES, TESTIMONIALS } from './data';
import { Play, Download, Star, ArrowRight, BookOpen, Video as VideoIcon } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 overflow-x-hidden">
      <Navigation />
      
      <Hero />

      {/* About Section */}
      <Section id="about" className="bg-white dark:bg-dark-card" title="About The Channel" subtitle="Decoding the wisdom of the greats.">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              This channel isn't about writing software code—it's about <strong>programming your life</strong> for success.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We focus on mentorship and learning from the past geniuses of history. By understanding the mental models and habits of Leonardo da Vinci, Marcus Aurelius, and modern thinkers, we create actionable systems for your personal growth.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Subscribers</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Lessons</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-accent">100K+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Lives Impacted</div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl rounded-full" />
             <div className="relative bg-slate-900 rounded-2xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img src="https://picsum.photos/600/400" alt="Xujun teaching" className="rounded-xl w-full object-cover" />
             </div>
          </div>
        </div>
      </Section>

      {/* Topics Grid */}
      <Section id="topics" title="Transform Your Thinking">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6">
                <topic.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{topic.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Video */}
      <Section id="featured" className="bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full tracking-wider">FEATURED LESSON</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Think Like Leonardo da Vinci</h2>
            <p className="text-slate-300 text-lg">Unlocking the creative potential of the ultimate Renaissance man. Learn how to connect unconnected fields to solve modern problems.</p>
            <a 
              href="https://www.youtube.com/watch?v=2r_C4KGb0Ec&t=3s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center w-fit px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors"
            >
              <Play className="fill-current mr-2 w-5 h-5" /> Watch Now
            </a>
          </div>
          <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700">
             <img src="https://img.youtube.com/vi/2r_C4KGb0Ec/maxresdefault.jpg" alt="Video Thumbnail" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* Latest Videos */}
      <Section id="latest" title="Latest Wisdom">
        <div className="grid md:grid-cols-3 gap-8">
          {VIDEOS.slice(0, 6).map((video) => (
            <a 
              key={video.id} 
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="text-white fill-current w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded font-mono">{video.duration}</div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors dark:text-white line-clamp-2">{video.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex justify-between">
                <span>{video.views} views</span>
                <span>{video.date}</span>
              </p>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://youtube.com/@CodeYourMindWithXujun" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
            View All Videos <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </Section>

      {/* Quiz Section */}
      <Section id="quiz" className="bg-indigo-50 dark:bg-slate-900/50" title="What's Your Cognitive Profile?" subtitle="Take our 2-minute assessment to discover your learning style.">
        <div className="max-w-4xl mx-auto">
          <InteractiveQuiz />
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section id="roadmap" title="Your Learning Journey">
        <div className="max-w-3xl mx-auto">
          <Roadmap />
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="bg-white dark:bg-dark-card" title="Success Stories">
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Resources */}
      <Section id="resources" title="Resource Library">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((res, i) => (
            <div key={i} className="bg-white dark:bg-dark-card p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2 dark:text-white">{res.title}</h3>
              <p className="text-sm text-slate-500 mb-4 dark:text-slate-400">{res.description}</p>
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{res.type}</span>
                <span>{res.downloads} downloads</span>
              </div>
              <button className="w-full mt-4 flex items-center justify-center py-2 text-sm font-medium text-primary border border-primary/20 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                <Download className="w-4 h-4 mr-2" /> Download
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;