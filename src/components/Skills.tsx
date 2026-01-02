import React from 'react';
import { motion } from 'framer-motion';
import { 
    Cpu, Cloud, Code, Database, Box, GitBranch, Binary, BrainCircuit,
    Zap, Route, Palette, Sparkles, Key, FileText, Image 
} from 'lucide-react';

const skills = {
    'Cloud': [
        { name: 'AWS', icon: <Cloud className="w-8 h-8 text-white" /> },
        { name: 'Azure', icon: <Cloud className="w-8 h-8 text-white" /> },
        { name: 'Docker', icon: <Box className="w-8 h-8 text-white" /> },
        { name: 'CI/CD (Harness)', icon: <GitBranch className="w-8 h-8 text-white" /> },
    ],
    'Core': [
        { name: 'C++', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'JavaScript', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'TypeScript', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'Java', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'Data Structures', icon: <Binary className="w-8 h-8 text-white" /> },
        { name: 'Algorithms', icon: <BrainCircuit className="w-8 h-8 text-white" /> },
    ],
    'Stack': [
        { name: 'React', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'Node.js', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'Express', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'GraphQL', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'MongoDB', icon: <Database className="w-8 h-8 text-white" /> },
        { name: 'SQL', icon: <Database className="w-8 h-8 text-white" /> },
        { name: 'NoSQL', icon: <Database className="w-8 h-8 text-white" /> },
        { name: 'Redis', icon: <Database className="w-8 h-8 text-white" /> },
        { name: 'Vite', icon: <Zap className="w-8 h-8 text-white" /> },
        { name: 'React Router', icon: <Route className="w-8 h-8 text-white" /> },
        { name: 'Chakra UI', icon: <Palette className="w-8 h-8 text-white" /> },
        { name: 'Gemini AI', icon: <Sparkles className="w-8 h-8 text-white" /> },
        { name: 'Auth0', icon: <Key className="w-8 h-8 text-white" /> },
        { name: 'jsPDF', icon: <FileText className="w-8 h-8 text-white" /> },
        { name: 'html2canvas', icon: <Image className="w-8 h-8 text-white" /> },
    ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};


const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10 font-syne">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.keys(skills).map((category, index) => (
                    <motion.div
                        key={index}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills[category].map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    className="flex items-center gap-2 p-2 rounded-lg bg-white/10"
                                    variants={item}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                                        {skill.icon}
                                    </motion.div>
                                    <span className="text-white">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
