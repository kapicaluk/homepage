import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    let i = 0;
    let txt = ` Hi there!
    My name is Lukasz and I'm a JavaScript Developer. 
    
    Check out some of my projects.  `;
    let speed = 60;

    function typeItOut() {
      if (i < txt.length) {
        document.getElementsByClassName("demo")[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }
    setTimeout(typeItOut, 1800);

    return <div>
        <Navigation />
        <div className="hero" />
        <div className="hero__terminal">
          <pre>
            <code className="shell-session demo">~ $</code>
          </pre>
        </div>
      </div>;
  }
}

export default App;
