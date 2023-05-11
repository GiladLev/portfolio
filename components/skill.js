'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Skill = ({ directionLeft, skill }) => (

  <motion.div

    // eslint-disable-next-line react/jsx-props-no-multi-spaces
    variants={directionLeft ? fadeIn('left', 'tween', 0.2, 1) : fadeIn('right', 'tween', 0.2, 1)}
    className="rounded-full border border-gray-500 w-20 h-20 flex justify-center items-center p-1 bg-white"
  >
    <img
      src={skill}
      className=" object-cover h-3/4 w-3/4"
    />
  </motion.div>
);

export default Skill;
