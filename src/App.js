import React, { Component } from "react";
import "./App.css";
import Home from "./Home"
import Projects from './Projects'
import About from './About'
import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Navigation from "./Navigation";


class App extends Component {
  render() {
    return <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;
