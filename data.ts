import { 
  Brain, Zap, Lightbulb, Target, BookOpen, Repeat
} from 'lucide-react';
import { Topic, Video, Question, RoadmapPhase, Resource, Testimonial } from './types';

export const TOPICS: Topic[] = [
  { title: "Mental Models", description: "Learn how top thinkers structure complex problems", icon: Brain },
  { title: "Productivity Systems", description: "Execute more in less time with proven frameworks", icon: Zap },
  { title: "Memory Mastery", description: "Techniques to retain knowledge like a genius", icon: Lightbulb },
  { title: "Critical Thinking", description: "Sharpen your analytical and decision-making skills", icon: Target },
  { title: "Strategic Learning", description: "Learn how to learn faster and more effectively", icon: BookOpen },
  { title: "Habit Architecture", description: "Build lasting behaviors that compound over time", icon: Repeat },
];

export const VIDEOS: Video[] = [
  {
    id: "2r_C4KGb0Ec",
    title: "How to Think Like Leonardo da Vinci",
    thumbnail: "https://img.youtube.com/vi/2r_C4KGb0Ec/maxresdefault.jpg",
    date: "Latest Upload",
    duration: "10:15",
    description: "Unlocking the creative potential of the ultimate Renaissance man.",
    views: "New",
    url: "https://www.youtube.com/watch?v=2r_C4KGb0Ec&t=3s"
  },
  {
    id: "ArMeb8uZFB8",
    title: "The Mentorship of History's Greatest Minds",
    thumbnail: "https://img.youtube.com/vi/ArMeb8uZFB8/maxresdefault.jpg",
    date: "Recent",
    duration: "14:20",
    description: "Why having a dead mentor is better than a living one.",
    views: "15K",
    url: "https://www.youtube.com/watch?v=ArMeb8uZFB8"
  },
  {
    id: "h39mQuQKQdY",
    title: "Improving Your Life Through Stoicism",
    thumbnail: "https://img.youtube.com/vi/h39mQuQKQdY/maxresdefault.jpg",
    date: "1 week ago",
    duration: "12:45",
    description: "Practical application of ancient philosophy for modern stress.",
    views: "22K",
    url: "https://www.youtube.com/watch?v=h39mQuQKQdY&t=30s"
  },
  {
    id: "Z2Ce7NGI3zU",
    title: "What Schools Don't Teach About Success",
    thumbnail: "https://img.youtube.com/vi/Z2Ce7NGI3zU/maxresdefault.jpg",
    date: "2 weeks ago",
    duration: "18:30",
    description: "The hidden curriculum of successful people throughout history.",
    views: "45K",
    url: "https://www.youtube.com/watch?v=Z2Ce7NGI3zU"
  }
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When learning something new, I prefer to...",
    options: [
      { label: "Look at diagrams and charts", value: "visual", score: 20 },
      { label: "Listen to a podcast or lecture", value: "auditory", score: 20 },
      { label: "Try it out immediately with my hands", value: "kinesthetic", score: 20 },
      { label: "Analyze the underlying logic first", value: "analytical", score: 20 }
    ]
  },
  {
    id: 2,
    text: "My biggest productivity bottleneck is...",
    options: [
      { label: "Getting distracted by visuals", value: "visual", score: 10 },
      { label: "Noise in my environment", value: "auditory", score: 10 },
      { label: "Sitting still for too long", value: "kinesthetic", score: 10 },
      { label: "Overthinking the details", value: "analytical", score: 10 }
    ]
  },
  {
    id: 3,
    text: "I remember things best when...",
    options: [
      { label: "I can picture them in my mind", value: "visual", score: 20 },
      { label: "I repeat them out loud", value: "auditory", score: 20 },
      { label: "I write them down physically", value: "kinesthetic", score: 20 },
      { label: "I understand the system behind them", value: "analytical", score: 20 }
    ]
  },
  {
    id: 4,
    text: "When solving a problem, I usually...",
    options: [
      { label: "Draw a map of the situation", value: "visual", score: 15 },
      { label: "Talk through it with someone", value: "auditory", score: 15 },
      { label: "Walk around while thinking", value: "kinesthetic", score: 15 },
      { label: "Break it down into lists", value: "analytical", score: 15 }
    ]
  },
  {
    id: 5,
    text: "In a meeting, I am most likely to...",
    options: [
      { label: "Doodle or draw notes", value: "visual", score: 10 },
      { label: "Focus closely on the speaker's tone", value: "auditory", score: 10 },
      { label: "Fidget with a pen", value: "kinesthetic", score: 10 },
      { label: "Analyze the data presented", value: "analytical", score: 10 }
    ]
  }
];

export const ROADMAP: RoadmapPhase[] = [
  {
    title: "Foundations",
    items: [
      { id: "f1", title: "Mental Model Basics", description: "First Principles Thinking", status: "available" },
      { id: "f2", title: "Productivity 101", description: "Time Blocking & Pomodoro", status: "available" },
      { id: "f3", title: "The Learning Loop", description: "Input, Process, Output", status: "available" }
    ]
  },
  {
    title: "Application",
    items: [
      { id: "a1", title: "Systemizing Habits", description: "Atomic Habits Framework", status: "available" },
      { id: "a2", title: "Advanced Memory", description: "Memory Palace Technique", status: "available" },
      { id: "a3", title: "Cognitive Bias Check", description: "Overcoming logical fallacies", status: "available" }
    ]
  },
  {
    title: "Mastery",
    items: [
      { id: "m1", title: "Systematic Life", description: "Automating decisions with rules", status: "available" },
      { id: "m2", title: "Polymathy", description: "Connecting unrelated fields", status: "available" },
    ]
  }
];

export const RESOURCES: Resource[] = [
  { title: "Mental Models Cheat Sheet", description: "A quick reference to 50 top models.", type: "PDF", downloads: "12k" },
  { title: "30-Day Productivity Challenge", description: "Daily actionable prompts.", type: "PDF", downloads: "8k" },
  { title: "Habit Tracker", description: "Automated Excel sheet for tracking.", type: "Excel", downloads: "5k" },
  { title: "Critical Thinking Worksheet", description: "Framework for analyzing arguments.", type: "PDF", downloads: "3k" },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", role: "Software Engineer", content: "Xujun's channel completely changed how I approach life. The mental models are gold.", avatar: "https://picsum.photos/100/100?random=10" },
  { name: "David L.", role: "Med Student", content: "The memory palace techniques helped me ace my anatomy finals. Forever grateful!", avatar: "https://picsum.photos/100/100?random=11" },
  { name: "Elena R.", role: "Entrepreneur", content: "I treat my business like a system now. The systematic thinking videos are a must-watch.", avatar: "https://picsum.photos/100/100?random=12" },
];