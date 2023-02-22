import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./Hero.scss";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.25,
    },
  },
};
const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Hero() {
  const name = "Kenny";

  return (
    <div id='home'>
      <motion.div
        className='app_hero-info'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}>
        <div className='app_hero-intro'>
          <motion.span
            whileInView={{ scale: [0, 1] }}
            transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 1 }}>
            Hello, It's Me
          </motion.span>
          <motion.div variants={sentence} initial='hidden' whileInView='visible'>
            {name.split("").map((char, i) => (
              <motion.h1 key={`${char}-${i}`} variants={letter}>
                {char}
              </motion.h1>
            ))}
          </motion.div>
        </div>

        <motion.div
          className='app_hero-position'
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 3.5 }}>
          <p className='p_text'>Aspiring Full-Stack Developer</p>
          <p className='p_text'>CS/CE NEU @2022</p>
          <p className='p_text'>Based in NYC</p>
        </motion.div>
      </motion.div>
      <div className='app_hero-profile'>
        <img src={images.profile} alt='profile' />
      </div>
    </div>
  );
}

export default Wrapper(Hero, "home");
