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
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleScrollToHome = () => {
    this.props.refProp.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  handleScrollToInstructions = () => {
    this.props.refProp2.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  render() {
    return (
      <footer id="footer" className="footer-box">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-column-content">
              <h1 style={{ fontSize: "19px" }}>Copyright 2022 Optiwing.</h1>
              <br />
              <p className="footer-title">All rights reserved.</p>
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
                  <Link
                    to="/"
                    className="footer-link"
                    onClick={() => this.handleScrollToHome()}
                  >
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    to="/"
                    className="footer-link"
                    onClick={() => this.handleScrollToInstructions()}
                  >
                    Instructions
                  </Link>
                </li>
                <li className="list-item">
                  <a
                    href="mailto:tim.b.schneider@gmail.com "
                    className="footer-link"
                  >
                    Contact
                  </a>
                </li>
                <li className="list-item">
                  <Link to="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-item"></li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <div className="line"></div>
              <ul>
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
              <a
                href="mailto:tim.b.schneider@gmail.com"
                className="footer-link padding-bottom-24"
              >
                <u>Contact Us</u>
              </a>
              <a
                href="mailto: info@optiwing.com"
                className="footer-link padding-bottom-24"
              >
                <AiIcons.AiFillMail />
                &nbsp;info@optiwing.com
              </a>
              <a
                href="tel:5302299194"
                className="footer-link padding-bottom-24"
              >
                <AiIcons.AiFillPhone />
                &nbsp;(555)-516-7078
              </a>
              <div className="line"></div>
              <div>
                <a
                  className="icon-footer icon--fill"
                  href="https://www.facebook.com/optiwing/"
                >
                  <FacebookLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="https://www.instagram.com/optiwing/"
                >
                  <InstagramLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="mailto: tim.b.schneider@gmail.com"
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
