import React, { Component } from "react";
import './Navigation.css'
import {Link} from "react-router-dom"
import logo from "./assets/logo.svg";
import About from "./About";
import App from "./App";


class Navigation extends Component {
  render() {
    return <div>
        {" "}
        <header class="header">
          <div class="logo" />
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon" />
          </label>
          <ul class="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a href="https://github.com/kapicaluk">Github</a>
            </li>
          </ul>
        </header>
      </div>;

  }
}

export default Navigation;