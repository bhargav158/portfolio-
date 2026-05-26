export const skills = [
  { category: 'Languages',  items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL'] },
  { category: 'Frontend',   items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend',    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs'] },
  { category: 'Databases',  items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'] },
  { category: 'AI / ML',    items: ['TensorFlow', 'OpenCV', 'MediaPipe', 'LLMs', 'Pandas', 'Gemini'] },
  { category: 'Tools',      items: ['Git', 'GitHub', 'Postman', 'Power BI', 'Tableau', 'Vite'] },
]

export const experience = [
  {
    period: '2022 – 2026',
    company: 'Vayu Aarambh Innovations',
    role: 'Software Developer',
    desc: 'Built scalable full-stack modules for AI + IoT products using Next.js, Node.js and Firebase. Collaborated with cross-functional teams to deliver production-ready features.',
    tags: ['Next.js', 'Node.js', 'Firebase', 'IoT'],
  },
  {
    period: 'Internship',
    company: 'CodSoft',
    role: 'Machine Learning Intern',
    desc: 'Developed and evaluated ML models on real-world datasets, end-to-end from data preprocessing to evaluation.',
    tags: ['Python', 'ML', 'Pandas', 'Scikit-learn'],
  },
  {
    period: 'Internship',
    company: 'Edunet Foundation',
    role: 'AI Intern',
    desc: 'Built a deep learning model for forest fire detection using image classification for an early-warning safety system.',
    tags: ['TensorFlow', 'OpenCV', 'Deep Learning'],
  },
]

export const projects = [
  {
    num: '01',
    title: 'Real-Time AI Voice Agent for Interactive Interviews',
    desc: 'AI interview system using Gemini LLM, WebRTC and Vapi SDK with adaptive questioning and automated feedback. Implements speech processing, dynamic prompts and performance evaluation pipeline.',
    tags: ['Gemini LLM', 'WebRTC', 'Vapi SDK', 'NLP'],
    link: 'https://github.com/bhargav158',
    highlight: true,
    award: '🏆 2nd Best Paper — IC-AISMART 2025',
  },
  {
    num: '02',
    title: 'AI-Powered Connections for Matching Profiles',
    desc: 'ML-based recommendation engine using behavioral and preference similarity scoring with feature extraction and ranking model for accurate user profile matching.',
    tags: ['Machine Learning', 'Recommendation', 'Python'],
    link: 'https://github.com/bhargav158',
    highlight: false,
    award: '📄 Published — IJARESM (IF 8.5)',
  },
  {
    num: '03',
    title: 'AI Therapist',
    desc: 'NLP-based conversational assistant for context-aware mental health support with intent detection, context memory and empathetic response generation.',
    tags: ['NLP', 'Conversational AI', 'Intent Detection'],
    link: 'https://github.com/bhargav158',
    highlight: false,
    award: null,
  },
  {
    num: '04',
    title: 'Clinique Health Tree',
    desc: 'Full-stack healthcare booking platform with appointment scheduling, responsive UI and backend APIs for patient data management.',
    tags: ['Full Stack', 'Node.js', 'REST API', 'React'],
    link: 'https://github.com/bhargav158',
    highlight: false,
    award: null,
  },
  {
    num: '05',
    title: 'Carbon Footprint Tracker',
    desc: 'Web app to calculate carbon emissions and generate personalized eco insights using usage patterns and emission factors.',
    tags: ['React', 'Data Viz', 'Sustainability'],
    link: 'https://github.com/bhargav158',
    highlight: false,
    award: null,
  },
]

export const achievements = [
  { icon: '🏆', title: '2nd Best Paper — IC-AISMART 2025', desc: 'For "A Real-Time AI Voice Agent for Interactive Interviews" at AICTE-sponsored conference.' },
  { icon: '🎖️', title: 'Certificate of Appreciation — IC-AISMART', desc: 'Recognized for outstanding AI project presentation at JSS Academy, Bengaluru.' },
  { icon: '🤖', title: 'Google Agentic AI Hackathon', desc: 'Certificate of Achievement for innovative agentic AI development.' },
  { icon: '⚡', title: 'Code-6-Craze Hackathon', desc: 'Built and shipped a real-time solution under competitive hackathon conditions.' },
  { icon: '🚀', title: 'ISRO Hackathon', desc: 'National-level participation in ISRO\'s space-tech innovation challenge.' },
]

export const publications = [
  {
    type: 'journal' as const,
    title: 'AI-Powered Connections for Matching Profiles',
    venue: 'IJARESM · ISSN: 2455-6211 · Impact Factor: 8.536 · Volume 13, Issue 7 · July 2025',
    award: null,
  },
  {
    type: 'conference' as const,
    title: 'A Real-Time AI Voice Agent for Interactive Interviews',
    venue: 'IC-AISMART 2025 — AICTE-Sponsored International Conference · JSS Academy, Bengaluru',
    award: '🏆 2nd Best Paper Award',
  },
]

export const chatResponses: Record<string, string> = {
  default: "Hi! I'm Bhargav's portfolio bot 🤖 Ask me about his skills, projects, experience, or how to contact him!",
  hello: "Hey there! 👋 I'm Bhargav's AI assistant. Ask me anything about his work — projects, skills, experience, or how to reach him!",
  hi: "Hey there! 👋 I'm Bhargav's AI assistant. Ask me anything about his work — projects, skills, experience, or how to reach him!",
  skills: "Bhargav is skilled in:\n• **Languages:** Python, JavaScript, Java, C, SQL\n• **Frontend:** React, Next.js, Tailwind\n• **Backend:** Node.js, Express, FastAPI\n• **AI/ML:** TensorFlow, OpenCV, LLMs, Gemini\n• **Databases:** PostgreSQL, MongoDB, Firebase",
  projects: "Bhargav has built 5+ projects:\n1. 🎙️ AI Voice Interview Agent (Gemini + WebRTC)\n2. 🤝 Profile Matching ML Engine (Published!)\n3. 🧠 AI Therapist (NLP)\n4. 🏥 Clinique Health Tree (Full Stack)\n5. 🌱 Carbon Footprint Tracker\n\nAll on GitHub → github.com/bhargav158",
  experience: "Bhargav has worked at:\n• **Vayu Aarambh Innovations** — Software Developer (2022–2026)\n• **CodSoft** — ML Intern\n• **Edunet Foundation** — AI Intern\n\nHe's currently in his final year at AMC Engineering College with a 9.0 GPA!",
  contact: "You can reach Bhargav at:\n📧 gowdabhargav3@gmail.com\n📞 +91 80738 55488\n💼 linkedin.com/in/bhargav-gowda-61039b2a6\n🐙 github.com/bhargav158",
  education: "Bhargav is a final year student at **AMC Engineering College, Bangalore** pursuing B.E. in Artificial Intelligence & Machine Learning with a GPA of **9.0/10**.",
  publications: "Bhargav has 2 publications:\n1. 📄 *AI-Powered Connections for Matching Profiles* — IJARESM (Impact Factor: 8.5)\n2. 🏆 *A Real-Time AI Voice Agent for Interactive Interviews* — IC-AISMART 2025 (**2nd Best Paper Award!**)",
  gpa: "Bhargav has a GPA of **9.0/10** at AMC Engineering College, Bangalore! 🎓",
  award: "Bhargav won **2nd Best Paper Award** at IC-AISMART 2025 (AICTE-sponsored International Conference) at JSS Academy, Bengaluru for his work on AI Voice Agents! 🏆",
  hire: "Bhargav is actively looking for **Software Engineer, Full Stack, Backend, and AI roles**! 🚀\n\nReach out at: gowdabhargav3@gmail.com",
}
