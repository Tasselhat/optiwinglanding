import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Missing() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <main>
      <Header />
      <section className="homepage-section-containter">
        <div className="title-background"></div>
        <div className="title-container">
          <h1 style={{ margin: "20px", fontSize: "50px" }} align="center">
            Page Does Not Exist
          </h1>
          <div style={{ margin: "20px" }} align="center">
            <button className="get-started-button" onClick={goBack}>
              <span className="start-button-front">Take Me Back</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
