import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { RefreshCw, Share2 } from 'lucide-react';

interface ScoreProfile {
  visual: number;
  auditory: number;
  kinesthetic: number;
  analytical: number;
}

export const InteractiveQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<ScoreProfile>({ visual: 0, auditory: 0, kinesthetic: 0, analytical: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (value: string, score: number) => {
    setScores(prev => ({ ...prev, [value]: prev[value as keyof ScoreProfile] + score }));
    
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsFinished(true);
      // Persist to local storage in a real app
      localStorage.setItem('quizResults', JSON.stringify(scores));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ visual: 0, auditory: 0, kinesthetic: 0, analytical: 0 });
    setIsFinished(false);
  };

  const chartData = [
    { subject: 'Visual', A: scores.visual, fullMark: 100 },
    { subject: 'Auditory', A: scores.auditory, fullMark: 100 },
    { subject: 'Kinesthetic', A: scores.kinesthetic, fullMark: 100 },
    { subject: 'Analytical', A: scores.analytical, fullMark: 100 },
  ];

  const getDominantTrait = () => {
    return Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
      <div className="p-6 md:p-8">
        {!isFinished ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentQuestion) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQuestion) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                {QUIZ_QUESTIONS[currentQuestion].text}
              </h3>
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.value, option.score)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200 flex items-center group"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-primary mr-4 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-lg text-slate-700 dark:text-slate-200">{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-2 text-slate-800 dark:text-white">Your Cognitive Profile</h3>
            <p className="text-xl text-primary font-medium capitalize mb-6">
              Dominant Style: {getDominantTrait()} Thinker
            </p>

            <div className="h-64 w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                  <PolarGrid stroke="#94a3b8" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Profile"
                    dataKey="A"
                    stroke="#6366f1"
                    strokeWidth={3}
                    fill="#6366f1"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
               <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">Recommendation</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Based on your {getDominantTrait()} style, you should focus on our "Mental Models" playlist first.</p>
               </div>
               <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 dark:text-purple-200 mb-2">Strategy</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Use {getDominantTrait() === 'visual' ? 'mind maps' : 'audio notes'} to retain information 2x faster.</p>
               </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button 
                onClick={resetQuiz}
                className="flex items-center px-6 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" /> Retake
              </button>
              <button className="flex items-center px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
                <Share2 className="w-4 h-4 mr-2" /> Share Result
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};