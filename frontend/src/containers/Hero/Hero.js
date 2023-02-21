import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./Hero.scss";

function Hero() {
  return (
    <div id='home'>
      <motion.div className='app_hero-info'>
        <div className='app_hero-intro'>
          <span>👋🏻</span>
          <div>
            <p className='p_text'>Hello, I'm</p>
            <h1 className='head_text'>Kenny</h1>
          </div>
        </div>
        <div className='app_hero-position'>
          <p className='p_text'>Full-Stack Developer</p>
          <p className='p_text'>CS/CE NEU @2022</p>
        </div>
      </motion.div>
      <div className='app_hero-profile'>
        <img src={images.profile} alt='profile' />
      </div>
      <motion.div className='app_hero-skills'>
        {[images.git, images.react, images.css].map((skill) => (
          <div key={`skill-${skill}`} className='app_flex'>
            <img src={skill} alt='skill' />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Wrapper(Hero, "home");
