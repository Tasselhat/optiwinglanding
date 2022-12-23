import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import "../css/Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: false,
    };
  }

  showSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };

  handleScrollToHome = () => {
    this.props.refProp.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    this.setState({ sidebar: false });
  };

  handleScrollToInstructions = () => {
    this.props.refProp2.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    this.setState({ sidebar: false });
  };

  scrollToBottom = () => {
    const height = document.body.scrollHeight;

    // Scroll to the bottom of the document smoothly
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
    this.setState({ sidebar: false });
  };

  render() {
    return (
      <div>
        <div className="navbar">
          <a href="/home">
            <img alt="logo" src="" className="navbar-logo"></img>
          </a>
          <div className="navbar-right">
            <Link to="/" className="header-link">
              <button
                onClick={() => this.handleScrollToHome()}
                className="header-button"
              >
                Home
              </button>
            </Link>
            <Link to="/" className="header-link">
              <button
                onClick={() => this.handleScrollToInstructions()}
                className="header-button"
              >
                Instructions
              </button>
            </Link>
            <Link to="/" className="header-link">
              <button
                onClick={() => this.scrollToBottom()}
                className="header-button"
              >
                To Bottom
              </button>
            </Link>
            <a className="header-link" href="https://app.optiwing.com/register">
              <button className="header-button">Login</button>
            </a>
            <div className="redirect-buttons">
              <a
                href="https://app.optiwing.com/register"
                className="header-link nomargin"
              >
                <button className="free-credit-button">
                  <span className="button-front">Try it For Free</span>
                </button>
              </a>
            </div>
            <div className="menu-bars">
              <AiIcons.AiOutlineMenu onClick={() => this.showSidebar()} />
            </div>
          </div>
        </div>
        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={() => this.showSidebar()}>
            <li className="navbar-toggle">
              <div className="menu-close">
                <AiIcons.AiFillCloseCircle />
              </div>
            </li>
            <li className="nav-text">
              <Link
                to="/"
                className="navbar-child"
                onClick={() => this.handleScrollToHome()}
              >
                <AiIcons.AiFillHome />
                <span className="sidebar-item-title">Home</span>
              </Link>
            </li>
            <li className="nav-text">
              <div
                className="navbar-child"
                onClick={() => this.handleScrollToInstructions()}
              >
                <AiIcons.AiFillInfoCircle />
                <span className="sidebar-item-title">Instructions</span>
              </div>
            </li>
            <li className="nav-text">
              <div
                className="navbar-child"
                onClick={() => this.scrollToBottom()}
              >
                <IoIcons.IoMdDocument />
                <span className="sidebar-item-title">To Bottom</span>
              </div>
            </li>
            <li className="nav-text">
              <a
                className="navbar-child"
                href="https://app.optiwing.com/register"
              >
                <IoIcons.IoMdLogIn />
                <span className="sidebar-item-title">Login</span>
              </a>
            </li>
            <li className="nav-text">
              <a
                className="navbar-child"
                href="https://app.optiwing.com/register"
              >
                <AiIcons.AiFillDollarCircle />
                <span className="sidebar-item-title">Try it for Free!</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
