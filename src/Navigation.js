import React, { Component } from "react";
import './Navigation.css'
import {Link} from "react-router-dom"

class Navigation extends Component {
  render() {
    return <div>
        <header className="header">
          <div className="logo" />
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
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