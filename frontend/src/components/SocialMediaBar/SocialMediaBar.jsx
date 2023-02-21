import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import "./SocialMediaBar.scss";

function SocialMediaBar() {
  return (
    <div className='app_social_media'>
      <div>
        <IoLogoLinkedin />
      </div>
      <div>
        <IoLogoGithub />
      </div>
      <div>
        <IoLogoInstagram />
      </div>
    </div>
  );
}

export default SocialMediaBar;
