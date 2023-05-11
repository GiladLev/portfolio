'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className=" relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto h-screen flex flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0 gap-8 relative`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| My selected works" />
        <TitleText title={<>MY PROJECTS:</>} />

      </motion.div>

      {/* <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project)=>(
          <div>
            <img/>
          </div>
        ))}
      </div> */}

      <div className="w-full absolute top-[35%] bg-[#61b8c6]/60 left-0 h-[300px] -skew-y-12" />

    </motion.div>
  </section>
);

export default WhatsNew;
