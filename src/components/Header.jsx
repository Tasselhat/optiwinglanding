import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarData } from "./ComponentData/SidebarData.js";
import "../css/Navbar.css";

import Logo from "./images/Shasta_Logo_Circle.png";

export default class Navbar extends React.Component {
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

  render() {
    return (
      <div>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <IoIcons.IoMdMenu onClick={() => this.showSidebar()} />
          </Link>
          <Link to="/home">
            <img alt="logo" src="" className="navbar-logo"></img>
          </Link>
          <div className="navbar-right">
            <Link to="/calendar" className="header-link">
              <button className="header-button">Class Schedule</button>
            </Link>
            <Link to="/about" className="header-link">
              <button className="header-button">About Us</button>
            </Link>
            <Link to="/contact" className="header-link">
              <button className="header-button">Contact Us</button>
            </Link>
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
            <Link to="/home" className="home-icon">
              <FaIcons.FaHome></FaIcons.FaHome>
            </Link>
          </div>
        </div>
        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={() => this.showSidebar()}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <IoIcons.IoMdClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {item.path ? (
                    <Link to={item.path}>
                      {item.icon}
                      <span className="sidebar-item-title">{item.title}</span>
                    </Link>
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
