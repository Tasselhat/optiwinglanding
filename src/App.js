import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

import { CardData } from "./components/ComponentData/CardData";
import "./css/Homepage.css";

function App() {
  return (
    <main>
      <Header />
      <section className="homepage-section-containter">
        <div class="title-block">
          <div class="title">Welcome to My App</div>
          <button class="button">Get Started</button>
        </div>

        <div class="description">
          <h2>How to Use My App</h2>
          <p>My app is easy to use. Follow these steps to get started:</p>
        </div>

        <div class="instructions">
          <div class="instruction-card">
            <div class="instruction-card-title">Step 1</div>
            <p>Do this thing</p>
          </div>
          <div class="instruction-card">
            <div class="instruction-card-title">Step 2</div>
            <p>Do that thing</p>
          </div>
          <div class="instruction-card">
            <div class="instruction-card-title">Step 3</div>
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
