import React from "react";

import { Hero, About, Work, Contact } from "./containers/index";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
