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
        <div className="title-wrapper">
          <div className="title-background"></div>
          <div className="title-container">
            <div className="title-block" ref={homeRef}>
              <h1 className="title" align="center">
                Automatically{" "}
                <span className="electricblue">rank and compare keywords</span>,
                see <span className="electricblue">connections </span>
                and compare by{" "}
                <span className="electricblue">topical similarity.</span>
              </h1>
              <div>
                <button className="get-started-button">
                  <span className="start-button-front">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <h1>How to Use My App</h1>
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
