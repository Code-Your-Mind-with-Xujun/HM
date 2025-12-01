import React, { useState, useEffect } from 'react';
import { ROADMAP } from '../data';
import { CheckCircle2, Circle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Roadmap: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('roadmapProgress');
    if (saved) {
      setCompletedItems(JSON.parse(saved));
    }
  }, []);

  const toggleItem = (id: string) => {
    let newCompleted;
    if (completedItems.includes(id)) {
      newCompleted = completedItems.filter(i => i !== id);
    } else {
      newCompleted = [...completedItems, id];
    }
    setCompletedItems(newCompleted);
    localStorage.setItem('roadmapProgress', JSON.stringify(newCompleted));
  };

  return (
    <div className="space-y-12">
      {ROADMAP.map((phase, index) => (
        <div key={index} className="relative">
          <div className="absolute left-8 top-10 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -z-10" />
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg z-10">
              {index + 1}
            </div>
            <h3 className="ml-6 text-2xl font-bold text-slate-800 dark:text-white">{phase.title}</h3>
          </div>

          <div className="ml-16 space-y-4">
            {phase.items.map((item) => {
              const isCompleted = completedItems.includes(item.id);
              
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl border ${
                    isCompleted 
                      ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' 
                      : 'bg-white dark:bg-dark-card border-slate-200 dark:border-slate-700'
                  } transition-all cursor-pointer shadow-sm`}
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-start">
                    <div className={`mt-1 mr-4 ${isCompleted ? 'text-green-500' : 'text-slate-400'}`}>
                      {isCompleted ? <CheckCircle2 /> : <Circle />}
                    </div>
                    <div>
                      <h4 className={`font-semibold text-lg ${isCompleted ? 'text-green-900 dark:text-green-100' : 'text-slate-800 dark:text-slate-200'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm ${isCompleted ? 'text-green-700 dark:text-green-300' : 'text-slate-500 dark:text-slate-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};