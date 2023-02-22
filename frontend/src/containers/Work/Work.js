import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { motion } from "framer-motion";
import "./Work.scss";
import { client, imageFor } from "../../client";

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [shuffle, setShuffle] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = "*[_type=='project']";
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWorks(data);
    });
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setShuffle([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setShuffle([{ y: 0, opacity: 1 }]);
      if (filter === "All") setFilteredWorks(works);
      else setFilteredWorks(works.filter((w) => w.tags[0] === filter));
    }, 500);
  };

  return (
    <div id='work'>
      <h1 className='head_text'>
        Web <span>Applications</span>
      </h1>
      <div className='app_work-filters'>
        {["All", "Frontend", "Full Stack"].map((filter) => (
          <div
            key={filter}
            className={`bold_text ${filter === activeFilter ? "app_work-selected-filter" : ""}`}
            onClick={() => handleFilter(filter)}>
            {filter}
          </div>
        ))}
      </div>
      <motion.div
        className='app_work-projects'
        animate={shuffle}
        transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {filteredWorks.map((project) => (
          <a
            className='app_work-project'
            href={project.codeLink}
            target='_blank'
            rel='noreferrer'
            key={project.codeLink}>
            <img src={imageFor(project.imgUrl)} alt={project.title} />
            <div className='app_work-project-overlay'>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default Wrapper(Work, "work");
