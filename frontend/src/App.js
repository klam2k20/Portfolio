import React from "react";

import { Header, About, Work, Skills, Testimonial, Footer } from "./containers/index";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
