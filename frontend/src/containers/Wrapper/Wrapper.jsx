import React from "react";
import NavSidebar from "../../components/NavSidebar/NavSidebar";
import SocialMediaBar from "../../components/SocialMediaBar/SocialMediaBar";
import "./Wrapper.scss";

function Wrapper(Component, id, className) {
  return () => {
    return (
      <div className='app_container'>
        <SocialMediaBar />
        <Component />
        <NavSidebar activeId={id} />
      </div>
    );
  };
}

export default Wrapper;
