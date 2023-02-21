import React from "react";

import { Hero, About, Work, Skills, Contact } from "./containers/index";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
