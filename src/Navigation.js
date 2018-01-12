import React, { Component } from "react";
import logo from "./assets/logo.svg";


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
              <a href="doc.html" className="link link--dark">
                <i className="fa fa-book" /> About
              </a>
            </li>
            <li className="menu__item">
              <a href="https://github.com/kapicaluk" className="link link--dark">
                <i className="fa fa-github" /> Github
              </a>
            </li>
            <li className="menu__item">
              <a href="https://github.com/kapicaluk" className="link link--dark">
                <i className="fa fa-github" /> Projects
              </a>
            </li>
          </ul>
        </nav>
        </div>
  }
}

export default Navigation;
