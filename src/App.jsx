import { useState } from "react";

import "./App.css";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Section from "./components/Section";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Section />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
