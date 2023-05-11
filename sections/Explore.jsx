'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { skillsImage } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import Skill from '../components/skill';

const Explore = () => (
  <section className={`${styles.paddings} `} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col text-center justify-center items-center`}
    >
      <TypingText title="| Knowledge" textStyles="text-center" />
      <TitleText title={<>My Skills:</>} textStyles="text-center" />

      <div className="grid grid-cols-4 gap-2 ">
        {skillsImage?.slice(0, skillsImage.length / 2).map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
        {skillsImage
          ?.slice(skillsImage.length / 2, skillsImage.length)
          .map((skill, index) => (
            <Skill key={index} skill={skill} directionLeft />
          ))}
      </div>
    </motion.div>
  </section>
);

export default Explore;

