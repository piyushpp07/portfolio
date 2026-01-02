
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'System Engineer',
    company_name: 'Tata Consultancy Services',
    logo: 'https://hiregen.com/api/company_logos/b1eca3df-900b-4d0e-90b5-a6a3a6f0337d_tcs.png',
    date: 'Jun 2023 - Present',
    points: [
      'Architected serverless microservices (AWS Lambda/Node.js).',
      'Reduced infra overhead by 40%.',
      'Optimized API latency by 30% using GraphQL & AppSync.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Shortcast (Remote)',
    logo: 'S', 
    date: 'Jan 2023 - Jun 2023',
    points: [
        'Migrated legacy code to React Native CLI, reducing app bundle size by 58%.'
    ],
  },
];

interface ExperienceProps {
  title: string;
  company_name: string;
  logo: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: ExperienceProps;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex gap-4 md:gap-8"
    >
      <div className="w-16 h-16 rounded-full bg-tertiary flex-shrink-0 flex items-center justify-center">
        {experience.logo.startsWith('http') ? (
            <img src={experience.logo} alt={experience.company_name} className="w-12 h-12 object-contain" />
        ) : (
            <span className="text-3xl font-bold text-white">{experience.logo}</span>
        )}
      </div>
      <div>
        <h3 className="text-white text-xl md:text-2xl font-bold">{experience.title}</h3>
        <p className="text-secondary text-base md:text-lg font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className="text-secondary text-sm md:text-base">{experience.date}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, pointIndex: number) => (
            <motion.li
              key={`experience-point-${pointIndex}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pointIndex * 0.1 + index * 0.2 }}
              className="text-white-100 text-sm md:text-base pl-1 tracking-wider"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-syne">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative">
        <div className="absolute w-1 bg-accent/30 top-0 left-8 h-full" />
        <div className="space-y-12">
            {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
