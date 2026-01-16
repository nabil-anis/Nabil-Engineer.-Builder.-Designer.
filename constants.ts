
import { Achievement, Website } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'trace-project',
    title: 'T.R.A.C.E Hardware Project',
    description: 'Development and presentation at Teknofest Pakistan. Bringing physical form to digital logic with real-time telemetry and a robust hardware-software handshake.',
    date: '23 DECEMBER 2025',
    category: 'HARDWARE'
  },
  {
    id: 'jsmu-2025',
    title: 'TA’EED: The Elder’s Voice',
    description: 'Secured 2nd Position province-wide at the JSMU Annual Education & Research Symposium. A study in empathy-driven research and systemic advocacy.',
    date: '17–18 DECEMBER 2025',
    category: 'RESEARCH'
  },
  {
    id: 'mit-2025',
    title: 'MIT Energy & Climate Hack',
    description: 'Received a formal invitation to participate in MIT’s 2025 hackathon. Participation deferred—a scheduling conflict between two versions of the future.',
    date: '14–15 NOVEMBER 2025',
    category: 'RECOGNITION'
  },
  {
    id: 'cloudflare-2025',
    title: 'Cloudflare International Hackathon',
    description: 'Navigating global infrastructure constraints. A high-stakes environment where edge computing meets deliberate execution.',
    date: '25 OCTOBER 2025',
    category: 'INFRASTRUCTURE'
  },
  {
    id: 'saylani-hack-2025',
    title: 'Saylani 12-Hour Overnight',
    description: 'A test of endurance and flow. 12 hours of continuous development. Coffee is a system; code is the output.',
    date: '18–19 OCTOBER 2025',
    category: 'ENDURANCE'
  },
  {
    id: 'ieee-day-2025',
    title: 'IEEE Day: Triple Threat',
    description: 'Event Host, Treasure Hunt Winner, and 3rd Place in the Interdepartmental Quiz. Efficiency in multiple modalities.',
    date: '16 OCTOBER 2025',
    category: 'LEADERSHIP'
  },
  {
    id: 'nasa-2025',
    title: 'NASA International Hackathon',
    description: 'Applying cosmic-scale data to terrestrial challenges. Engineering solutions with a planetary perspective.',
    date: '4–5 OCTOBER 2025',
    category: 'ENGINEERING'
  },
  {
    id: 'saylani-top',
    title: 'Saylani Discipline Excellence',
    description: 'Completed advanced coursework as Class Topper. Awarded certification by Arif Habib. Rigour is not an option; it is the default.',
    date: 'OCTOBER 2025',
    category: 'DISCIPLINE'
  },
  {
    id: 'devfest-2025',
    title: 'Road to DevFest AI (GDG)',
    description: 'Runner-Up in the GDG Kolachi AI competition. Refining models to meet the demands of human curiosity.',
    date: 'OCTOBER 2025',
    category: 'INTELLIGENCE'
  },
  {
    id: 'filmfest-2025',
    title: 'University FilmFest: Greeno',
    description: '1st Position in Advertisement Competition. Proving that persuasion is just another interface to be designed.',
    date: 'OCTOBER 2025',
    category: 'CREATIVE'
  },
  {
    id: 'acm-innovate',
    title: 'ACMxSHU Innovate-X',
    description: 'Master of Ceremony. Steering the narrative of technical innovation with a poet’s restraint.',
    date: '13 SEPTEMBER 2025',
    category: 'PERFORMANCE'
  },
  {
    id: 'icca-2025',
    title: 'ICCA Virtual Tech Session',
    description: 'The first student to host a virtual technical session at ICCA. Breaking barriers with minimal fuss.',
    date: '15 MAY 2025',
    category: 'LEADERSHIP'
  },
  {
    id: 'shu-chatbot',
    title: 'Salim Habib AI Infrastructure',
    description: 'Developing the central AI Chatbot for Salim Habib University. Integrating intelligence into the foundation of campus life.',
    date: '2 JANUARY 2025',
    category: 'INTELLIGENCE'
  },
  {
    id: 'mun-2024',
    title: 'Model United Nations',
    description: 'Honorary Mention. A diplomatic detour into systemic negotiation and the art of the compromise.',
    date: '12 OCTOBER 2024',
    category: 'DIPLOMACY'
  }
];

// Helper to generate a reliable screenshot URL via thum.io
const getScreenshotUrl = (url: string) => `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;

export const WEBSITES: Website[] = [
  {
    id: 'taeed-ai',
    name: 'TAEED AI',
    description: 'AI-powered healthcare support system designed to improve medication safety, especially for elderly and low-literacy users in developing countries.',
    url: 'https://taeeed.vercel.app/',
    image: getScreenshotUrl('https://taeeed.vercel.app/'),
    techStack: ['AI', 'React', 'Healthcare']
  },
  {
    id: 'ask-shu',
    name: 'Ask SHU',
    description: 'A precision replica of Salim Habib University’s web presence featuring a live, interactive AI chatbot responding to real-time student queries.',
    url: 'https://askshu-by-nbl.vercel.app/',
    image: getScreenshotUrl('https://askshu-by-nbl.vercel.app/'),
    techStack: ['Next.js', 'LLM', 'Tailwind']
  },
  {
    id: 'bhook-busters',
    name: 'Bhook Busters',
    description: 'A dedicated lunchbox system for university campuses, enabling seamless menu updates and real-time order management.',
    url: 'https://bhook-busters.vercel.app/',
    image: getScreenshotUrl('https://bhook-busters.vercel.app/'),
    techStack: ['React', 'Management', 'Firebase']
  },
  {
    id: 'study-buddy',
    name: 'Study Buddy',
    description: 'A limitless productivity suite designed specifically for students who refuse to accept academic boundaries.',
    url: 'https://study-buddy-by-nbl.vercel.app/',
    image: getScreenshotUrl('https://study-buddy-by-nbl.vercel.app/'),
    techStack: ['Productivity', 'React', 'UI/UX']
  },
  {
    id: 'focus-flow',
    name: 'Focus Flow',
    description: 'A digital sanctuary engineered for deep work, minimizing cognitive load through minimalist interface design.',
    url: 'https://focus-flow-by-nbl.vercel.app/',
    image: getScreenshotUrl('https://focus-flow-by-nbl.vercel.app/'),
    techStack: ['Efficiency', 'React', 'Framer']
  },
  {
    id: 'mayfa-couture',
    name: 'Mayfa Couture',
    description: 'A sophisticated digital storefront for a premium fashion house, focusing on high-end visual storytelling.',
    url: 'https://mayfa-couture.vercel.app/',
    image: getScreenshotUrl('https://mayfa-couture.vercel.app/'),
    techStack: ['E-commerce', 'Aesthetics', 'Tailwind']
  },
  {
    id: 'dr-classroom',
    name: 'Dr. Classroom',
    description: 'A specialized educational hub designed to bridge the gap between instructors and their digital classrooms.',
    url: 'https://dr-classroom.vercel.app/',
    image: getScreenshotUrl('https://dr-classroom.vercel.app/'),
    techStack: ['Education', 'CMS', 'React']
  },
  {
    id: 'artsycrafsy',
    name: 'ArtsyCrafsy',
    description: 'An elegant portfolio system crafted for artists to showcase their work without technical friction.',
    url: 'https://artfsycraftfsy.vercel.app/',
    image: getScreenshotUrl('https://artfsycraftfsy.vercel.app/'),
    techStack: ['Portfolio', 'Design', 'Minimalism']
  },
  {
    id: 'dream-rizq',
    name: 'Dream Rizq',
    description: 'A digital platform dedicated to Islamic mindfulness and spiritual financial alignment.',
    url: 'https://dream-rizq.vercel.app/',
    image: getScreenshotUrl('https://dream-rizq.vercel.app/'),
    techStack: ['Islamic', 'Community', 'Tailwind']
  },
  {
    id: 'mind-reader',
    name: 'Mind Reader',
    description: 'A theatrical technical subversion designed to challenge user expectations (and perform a little trolling).',
    url: 'https://mindreaderbynbl.vercel.app/',
    image: getScreenshotUrl('https://mindreaderbynbl.vercel.app/'),
    techStack: ['Experimental', 'Satire', 'JS']
  },
  {
    id: 'calculator-troll',
    name: 'The Calculator',
    description: 'A playful exploration of interface subversion. Not your standard arithmetic tool.',
    url: 'https://calculatorbynbl.vercel.app/',
    image: getScreenshotUrl('https://calculatorbynbl.vercel.app/'),
    techStack: ['Experimental', 'Satire', 'React']
  },
  {
    id: 'portfolio-24',
    name: '2024 Archive',
    description: 'A retrospective look at previous design iterations and technical milestones from early 2024.',
    url: 'https://portfolio24-by-nbl.vercel.app/',
    image: getScreenshotUrl('https://portfolio24-by-nbl.vercel.app/'),
    techStack: ['Archive', 'History', 'React']
  }
];
