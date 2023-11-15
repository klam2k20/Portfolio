import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { SiMinutemailer } from 'react-icons/si';
import './SocialMediaBar.scss';

function SocialMediaBar() {
  return (
    <div className='app_social_media'>
      <a href='https://www.linkedin.com/in/kkenny-lam/' target='_blank' rel='noreferrer'>
        <IoLogoLinkedin />
      </a>
      <a href='https://github.com/klam2k20' target='_blank' rel='noreferrer'>
        <IoLogoGithub />
      </a>
      <a href='mailto:lam.ke.nyc@gmail.com'>
        <SiMinutemailer />
      </a>
    </div>
  );
}

export default SocialMediaBar;
