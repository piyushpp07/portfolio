import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const name = "Piyush Paradkar";
const title = "Full Stack Developer | AWS Certified Cloud Practitioner.";

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

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <AnimatedBackground />
      <div className="text-center">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-black text-white font-syne"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)' }}
        >
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={item} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
          {title}
        </p>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;