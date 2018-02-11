import React, { Component } from "react";
import "./Projects.css";
import viewtrition from "./assets/viewtrition.png";
import slackbot from "./assets/slackbot.png";
import skills from "./assets/screen.png";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="col">
          <h1 className="projects-head">Viewtrition</h1>
          <img src={viewtrition} className="projects-img" />
          <p className="projects-copy">
            Mobile app that analyzes your pictures and tells you nutritional
            facts.
            <hr />
            <a href="https://youtu.be/w72mSp2WKW0">See here</a>
            <ul class="projects-stack">
              <li className="projects-btn">React-Native</li>
              <li className="projects-btn">Redux</li>
              <li className="projects-btn">Clarifai API</li>
              <li className="projects-btn">Firebase</li>
            </ul>
          </p>
        </div>
        <div className="col">
          <h1 className="projects-head">Fullstack Assistant</h1>
          <img src={slackbot} className="projects-img" />
          <p className="projects-copy">
            Slack bot that keeps track of your busy schedule at Fullstack
            <hr />
            <ul class="projects-stack">
              <li className="projects-btn">Node.js</li>
              <li className="projects-btn">BotKit Studio</li>
              <li className="projects-btn">OpenWeather API</li>
            </ul>
          </p>
        </div>
        <div className="col">
          <h1 className="projects-head">Skills grid</h1>
          <img src={skills} className="projects-img" />
          <p className="projects-copy">
            Skill grid with simple hover effect made with flexbox.
            <hr />
            <a href="https://kapicaluk.github.io/skills-css/">Demo</a>
            <ul class="projects-stack">
              <li className="projects-btn">CSS</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
