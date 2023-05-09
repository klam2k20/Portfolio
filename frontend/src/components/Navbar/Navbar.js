import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import resume from '../../Resume.pdf';
import './Navbar.scss';

import images from '../../constants/images';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const links = ['home', 'about', 'work', 'contact'];

  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app_navbar-links'>
        {links.map((link) => (
          <li className='app_flex p_text' key={`link-${link}`}>
            <div />
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
        <li className='app_flex p_text'>
          <div />
          <a href={resume} target='_blank' rel='noreferrer'>
            resume
          </a>
        </li>
      </ul>

      <div className='app_navbar-menu'>
        {!toggle && <HiOutlineMenu onClick={() => setToggle(true)} />}
        {toggle && (
          <motion.div
            initial={{ x: '100%' }}
            whileInView={{ x: ['100%', '0%'] }}
            transition={{ duration: 0.75, ease: 'easeOut' }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {links.map((link) => (
                <li className='app_flex p_text' key={`link-${link}`}>
                  <a href={`#${link}`} onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              ))}
              <li className='app_flex p_text'>
                <a href={resume} target='_blank' rel='noreferrer' onClick={() => setToggle(false)}>
                  resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
