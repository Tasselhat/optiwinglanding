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
                <span className="electricblue">topical similarity</span>.
              </h1>
              <p className="title-secondary" align="center">
                We use live Google SERP data to create topical connection maps
                so you know what keywords to use, pages to create, and how to
                interlink them. No more guesswork or hours of keyword research.
              </p>
              <div>
                <button
                  onClick={() => {
                    window.location.href = "https://app.optiwing.com/register";
                  }}
                  className="get-started-button"
                >
                  <span className="start-button-front">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <h1>How does keyword mapping work?</h1>
          <p>
            Optiwing uses Google SERP data to identify URLs that are ranking for
            similar keywords. The process works as follows.
          </p>
        </div>
        <div className="instructions" ref={instructionsRef}>
          <div className="instruction-card" id="step-1">
            <div className="instruction-card-title">Step 1</div>
            <p className="instruction-card-p">
              Upload a CSV file of keywords from your favourite keyword research
              tool such as Ahrefs and SEMRush. Alternatively, upload a custom
              file.
            </p>
          </div>
          <div className="instruction-card" id="step-2">
            <div className="instruction-card-title">Step 2</div>
            <p className="instruction-card-p">
              Optiwing will search for each keyword on Google, analyse the first
              page of results, and map keywords together that have 3 or more of
              the same pages in common.
            </p>
          </div>
          <div className="instruction-card" id="step-3">
            <div className="instruction-card-title">Step 3</div>
            <p className="instruction-card-p">
              Within a few minutes you'll get live results in the browser with
              keywords mapped in clusters based on topical connections,
              alternatively this will be available to download as an Excel file.
              No guess work required, just raw keyword insights from real-time
              Google data.
            </p>
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
