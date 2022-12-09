import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { useRef } from "react";

import { CardData } from "./components/ComponentData/CardData";
import "./css/Homepage.css";

function App() {
  const homeRef = useRef();
  const instructionsRef = useRef();

  return (
    <main>
      <Header refProp={homeRef} refProp2={instructionsRef} />
      <section className="homepage-section-containter">
        <div className="title-block" ref={homeRef}>
          <div className="title">Welcome to My App</div>
          <div>
            <button className="button">Get Started</button>
          </div>
        </div>
        <div className="description">
          <h2>How to Use My App</h2>
          <p>My app is easy to use. Follow these steps to get started:</p>
        </div>
        <div className="instructions" ref={instructionsRef}>
          <div className="instruction-card">
            <div className="instruction-card-title">Step 1</div>
            <p>Do this thing</p>
          </div>
          <div className="instruction-card">
            <div className="instruction-card-title">Step 2</div>
            <p>Do that thing</p>
          </div>
          <div className="instruction-card">
            <div className="instruction-card-title">Step 3</div>
            <p>Do the other thing</p>
          </div>
        </div>
      </section>
      <h1 className="photo-reel-h1 text-center">Photo Reel</h1>
      <Cards Data={CardData} />
      <Footer />
    </main>
  );
}

export default App;
