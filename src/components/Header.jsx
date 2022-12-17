import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarData } from "./ComponentData/SidebarData.js";
import "../css/Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: false,
      isHovering: false,
    };
  }

  showSidebar() {
    this.setState({ sidebar: !this.state.sidebar });
  }

  handleScrollToHome() {
    this.props.refProp.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    this.setState({ sidebar: false });
  }

  handleScrollToInstructions() {
    this.props.refProp2.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    this.setState({ sidebar: false });
  }

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
          <div className="menu-bars">
            <IoIcons.IoMdMenu onClick={() => this.showSidebar()} />
          </div>
          <a href="/home">
            <img alt="logo" src="" className="navbar-logo"></img>
          </a>
          <div className="navbar-right">
            <a className="header-link">
              <button
                onClick={() => this.handleScrollToHome()}
                className="header-button"
              >
                Home
              </button>
            </a>
            <a className="header-link">
              <button
                onClick={() => this.handleScrollToInstructions()}
                className="header-button"
              >
                Instructions
              </button>
            </a>
            <a className="header-link" onClick={() => this.scrollToBottom()}>
              <button className="header-button">To Bottom</button>
            </a>
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
          </div>
        </div>
        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={() => this.showSidebar()}>
            <li className="navbar-toggle">
              <div className="menu-bars">
                <IoIcons.IoMdClose />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {item.path ? (
                    <a href={item.path}>
                      {item.icon}
                      <span className="sidebar-item-title">{item.title}</span>
                    </a>
                  ) : (
                    <a href={item.href}>
                      {item.icon}
                      <span className="sidebar-item-title">{item.title}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
