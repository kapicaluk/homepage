import React, { Component } from "react";
import {Link} from "react-router-dom"
import logo from "./assets/logo.svg";
import About from "./About";
import App from "./App";

class Navigation extends Component {
  render() {
    return <div className="main">
        <nav>
          <div className="logo" />
          <ul className="menu">
            <div className="menu__item toggle">
              <span />
            </div>
            <li className="menu__item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu__item">
              <Link to="/about">About</Link>
            </li>
            <li className="menu__item">
              <a href="https://github.com/kapicaluk" className="link link--dark">
                <i className="fa fa-github" /> Github
              </a>
            </li>
            <li className="menu__item">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <div />
      </div>;
  }
}

export default Navigation;
