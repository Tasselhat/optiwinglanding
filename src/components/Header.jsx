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
      profileMenu: false,
      isHovering: false,
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    this.setState({ isHovering: false });
  }

  showSidebar() {
    this.setState({ sidebar: !this.state.sidebar, profileMenu: false });
  }

  handleScrollToHome() {
    this.props.refProp.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  handleScrollToInstructions() {
    this.props.refProp2.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  scrollToBottom = () => {
    const height = document.body.scrollHeight;

    // Scroll to the bottom of the document smoothly
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div>
        <div className="navbar">
          <a href="#" className="menu-bars">
            <IoIcons.IoMdMenu onClick={() => this.showSidebar()} />
          </a>
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
              <button onClick={() => this.handleScrollToInstructions()} className="header-button">
                Instructions
              </button>
            </a>
            <a className="header-link" onClick={() => this.scrollToBottom()}>
              <button className="header-button">To Bottom</button>
            </a>
            <div className="parent-portal-buttons">
              <a
                href="https://app.jackrabbitclass.com/regv2.asp?id=532938"
                className="header-link nomargin"
              >
                {this.state.isHovering && (
                  <button className="parent-portal-register-button">
                    <span
                      onMouseOver={() => this.handleMouseOver()}
                      onMouseOut={() => this.handleMouseOut()}
                      className="reg-button-front"
                    >
                      Register
                    </span>
                  </button>
                )}
                {!this.state.isHovering && (
                  <button className="parent-portal-button">
                    <span
                      onMouseOver={() => this.handleMouseOver()}
                      onMouseOut={() => this.handleMouseOut()}
                      className="button-front"
                    >
                      Parent Portal
                    </span>
                  </button>
                )}
              </a>
              <a
                href="https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=532938"
                className="header-link nomargin"
              >
                <button className="parent-portal-login-button">
                  {this.state.isHovering && (
                    <span
                      onMouseOver={() => this.handleMouseOver()}
                      onMouseOut={() => this.handleMouseOut()}
                      className="login-button-front"
                    >
                      Login
                    </span>
                  )}
                </button>
              </a>
            </div>
            <a href="/home" className="home-icon">
              <FaIcons.FaHome></FaIcons.FaHome>
            </a>
          </div>
        </div>
        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={() => this.showSidebar()}>
            <li className="navbar-toggle">
              <a href="#" className="menu-bars">
                <IoIcons.IoMdClose />
              </a>
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
