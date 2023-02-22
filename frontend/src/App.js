import React from "react";

import { Hero, About, Work } from "./containers/index";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Work />
    </div>
  );
}

export default App;
