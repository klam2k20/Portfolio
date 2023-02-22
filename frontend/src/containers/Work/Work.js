import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Work.scss";
import { client, imageFor } from "../../client";

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);

  useEffect(() => {
    const query = "*[_type=='project']";
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWorks(data);
    });
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") setFilteredWorks(works);
    else setFilteredWorks(works.filter((w) => w.tags[0] === filter));
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
      <div className='app_work-projects'>
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
      </div>
    </div>
  );
}

export default Wrapper(Work, "work");
