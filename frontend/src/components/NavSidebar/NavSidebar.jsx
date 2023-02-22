import React from "react";
import "./NavSidebar.scss";

function NavSidebar({ activeId }) {
  const links = ["home", "about", "work"];
  return (
    <div className='app_navigation_sidebar'>
      {links.map((link) => (
        <a
          href={`#${link}`}
          className='app_navigation_dot'
          key={`navigation-dot-${link}`}
          style={activeId === link ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
}

export default NavSidebar;
