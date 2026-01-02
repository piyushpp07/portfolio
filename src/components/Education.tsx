
import { motion } from 'framer-motion';

const education = [
    {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'LNCT Bhopal',
        date: '2019 - 2023',
    },
    {
        degree: 'Higher Secondary Certificate',
        institution: 'Shri Saibaba Public School',
        date: '2017 - 2019',
    },
];

interface EducationProps {
    degree: string;
    institution: string;
    date: string;
}

interface EducationCardProps {
    edu: EducationProps;
    index: number;
}

const EducationCard = ({ edu, index }: EducationCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex gap-4 md:gap-8"
        >
            <div className="w-10 h-10 rounded-full bg-tertiary flex-shrink-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-purple-500" />
            </div>
            <div>
                <h3 className="text-white text-xl md:text-2xl font-bold">{edu.degree}</h3>
                <p className="text-secondary text-base md:text-lg font-semibold" style={{ margin: 0 }}>
                    {edu.institution}
                </p>
                <p className="text-secondary text-sm md:text-base">{edu.date}</p>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10 font-syne">
                Education
            </h2>
            <div className="mt-20 flex flex-col relative">
                <div className="absolute w-1 bg-purple-500/30 top-0 left-5 h-full" />
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <EducationCard key={index} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
