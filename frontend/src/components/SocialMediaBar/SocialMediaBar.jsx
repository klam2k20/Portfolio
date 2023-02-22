import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import "./SocialMediaBar.scss";

function SocialMediaBar() {
  return (
    <div className='app_social_media'>
      <a href='https://www.linkedin.com/in/kenny-l-8672141b2/' target='_blank' rel='noreferrer'>
        <IoLogoLinkedin />
      </a>
      <a href='https://github.com/klam2k20' target='_blank' rel='noreferrer'>
        <IoLogoGithub />
      </a>
      <a href='https://www.instagram.com/kkenny_lam/' target='_blank' rel='noreferrer'>
        <IoLogoInstagram />
      </a>
    </div>
  );
}

export default SocialMediaBar;
