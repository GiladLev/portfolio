'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient p-5" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[60px] text-[40px] text-white">
          I am ready to work
        </h4>
      </div> */}

      <div className="flex flex-col w-full">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-center flex-col gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Let's talk:</h4>

          <div className="flex flex-col gap-4">
            {socials.map((social) => (
              <div key={social.name} className="flex justify-between gap-1">
                <a href={social.value}>
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                </a>
                <h4 className="font-bold text-[14px] text-secondary-white">
                  {social.name === 'email'
                    ? social.value.split(' ')[1]
                    : social.name === 'phone'
                      ? social.value.split('=')[1]
                      : social.value}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
