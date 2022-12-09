import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedin.svg";
import { ReactComponent as FacebookLogo } from "../images/facebook.svg";
import { ReactComponent as GmailLogo } from "../images/gmail.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="footer-box">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-column-content">
              <h3>Shasta Gymnastics and Sport Center</h3>
              <br />
              <p className="footer-title">
                <AiIcons.AiFillPushpin />
                &nbsp;2629 Bechelli Ln, Redding, CA 96002
              </p>
              <div className="line"></div>
              <div className="padding-bottom-24">
                <p>Website made by Tim Schneider</p>
                <br />
                <a
                  className="icon-footer icon--fill"
                  href="https://www.linkedin.com/in/timbschneider/"
                >
                  <LinkedinLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="https://github.com/Tasselhat"
                >
                  <GithubLogo />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <div className="line"></div>
              <ul>
                <li className="list-item">
                  <a to="/" className="footer-link">
                    Home
                  </a>
                </li>
                <li className="list-item">
                  <a to="/About" className="footer-link">
                    About
                  </a>
                </li>
                <li className="list-item">
                  <a to="/Contact" className="footer-link">
                    Contact
                  </a>
                </li>
                <li className="list-item">
                  <a to="/location" className="footer-link">
                    Map
                  </a>
                </li>
                <li className="list-item"></li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <div className="line"></div>
              <ul>
                <li className="list-item">Our business hours are:</li>
                <li className="list-item">Monday: 3:00p - 7:00p</li>
                <li className="list-item">Tuesday: 3:00p - 7:00p</li>
                <li className="list-item">Wednesday: 3:00p - 7:00p</li>
                <li className="list-item">Thursday: 3:00p - 7:00p</li>
                <li className="list-item">
                  <button
                    className="scroll-button"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Scroll to top
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <div className="line"></div>
              <a to="/Contact" className="footer-link padding-bottom-24">
                <u>Contact Us</u>
              </a>
              <a
                href="mailto: shastagymnasticsmedia@gmail.com"
                className="footer-link padding-bottom-24"
              >
                <AiIcons.AiFillMail />
                &nbsp;shastagymnasticsmedia@gmail.com
              </a>
              <a
                href="tel:5302299194"
                className="footer-link padding-bottom-24"
              >
                <AiIcons.AiFillPhone />
                &nbsp;(530)-229-9194
              </a>
              <div className="line"></div>
              <div>
                <a
                  className="icon-footer icon--fill"
                  href="https://www.facebook.com/shastagymnasticsacademy/"
                >
                  <FacebookLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="https://www.instagram.com/shastagymnastics/"
                >
                  <InstagramLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="mailto: shastagymnasticsmedia@gmail.com"
                >
                  <GmailLogo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
