import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { client, imageFor } from "../../client";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div id='about' className='app_about'>
      <h1 className='head_text'>
        About <span>Me</span>
      </h1>
      <div className='app_about-items'>
        {abouts.map((about) => (
          <div key={`about ${about.title}`} className='app_about-item'>
            <div className='app_about-item-title'>
              <img src={imageFor(about.imgUrl)} alt='about item' />
              <h2 className='bold_text'>{about.title}</h2>
            </div>
            <div>
              <p className='app_about-item-description'>{about.description}</p>
            </div>
          </div>
        ))}
        <div className='app_about-quote'>
          <div />
          <span>
            <span className='app_about-quote-text'>Only I Can Call My Dream Stupid!</span>
            <br />
            <span className='p_text'>- Zoro, 'One Piece'</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Wrapper(About, "about", "app_whitebg");
