import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { easeInOut, easeOut, motion } from "framer-motion";
import "./Navbar.scss";

import images from "../../constants/images";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const links = ["home", "about", "work", "skills", "contact"];

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
      </ul>

      <div className='app_navbar-menu'>
        {!toggle && <HiOutlineMenu onClick={() => setToggle(true)} />}
        {toggle && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "0%"] }}
            transition={{ duration: 0.75, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {links.map((link) => (
                <li className='app_flex p_text' key={`link-${link}`}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
