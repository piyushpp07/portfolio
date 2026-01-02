import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import MagneticButton from './ui/MagneticButton';
import { Github } from 'lucide-react';
import { BentoCard } from './ui/BentoCard';

const projects = [
    {
        name: 'ChatHub (Distributed Real-Time Chat)',
        description: 'Solved WebSocket scaling constraints; handled horizontal scaling behind API Gateway.',
        tags: [
            { name: 'React', color: 'blue-text-gradient' },
            { name: 'Node.js', color: 'green-text-gradient' },
            { name: 'Redis Pub/Sub', color: 'pink-text-gradient' },
            { name: 'Docker', color: 'blue-text-gradient' },
            { name: 'MongoDB', color: 'green-text-gradient' },
        ],
        source_code_link: 'https://github.com/piyushparadkar/chathub',
        className: 'lg:col-span-1',
    },
    {
        name: 'Shopping Adda (Cross-Platform E-commerce)',
        description: 'Unified serverless backend; achieved 50% increase in conversion rates.',
        tags: [
            { name: 'React', color: 'blue-text-gradient' },
            { name: 'React Native', color: 'green-text-gradient' },
            { name: 'AWS Lambda', color: 'pink-text-gradient' },
            { name: 'DynamoDB', color: 'blue-text-gradient' },
        ],
        source_code_link: 'https://github.com/piyushparadkar/shopping-adda',
        className: 'lg:col-span-1',
    },
    {
        name: 'text2course',
        description: 'An AI-powered course generator that creates courses from text.',
        tags: [
            { name: 'React', color: 'blue-text-gradient' },
            { name: 'Node.js', color: 'green-text-gradient' },
            { name: 'MongoDB', color: 'pink-text-gradient' },
            { name: 'Gemini AI', color: 'blue-text-gradient' },
            { name: 'Auth0', color: 'green-text-gradient' },
            { name: 'Chakra UI', color: 'pink-text-gradient' },
        ],
        source_code_link: 'https://github.com/piyushpp07/text2course',
        className: 'lg:col-span-1',
    },
];

const ProjectCard = ({ project }) => {
    return (
        <Tilt>
            <BentoCard className={project.className}>
                <div className="relative w-full h-[230px]">
                    <div className='w-full h-full bg-black rounded-2xl'/>
                    <div className="absolute top-0 right-0 m-2">
                        <MagneticButton>
                            <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded-full">
                                <Github className="w-6 h-6 text-white" />
                            </a>
                        </MagneticButton>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </BentoCard>
        </Tilt>
    );
};

const Projects = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-syne">
                    Projects.
                </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} project={project} />
                ))}
            </div>
        </>
    );
};

export default Projects;