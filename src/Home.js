import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ` Hi there!
    My name is Lukasz and I'm a JavaScript Developer.
    Check out some of my projects.  `,
      textDisplay: ""
    };
    this.displayTextLength = 0;
    this.typing = this.typing.bind(this);
  }

  componentDidMount() {
    setTimeout(this.typing, 500);
  }

  typing() {
    //text that is currently being typed
    let textToType = this.state.text;
    //typed text that will be displayed
    let textDisplay = textToType.substr(0, this.displayTextLength++);

    //set the textDisplay state
    this.setState({ textDisplay });

    //if all of the textToType hasn't displayed, keep typing
    if (this.displayTextLength < textToType.length + 1) {
      this.typeTimeout = setTimeout(this.typing, 50);
    } else {
      this.displayTextLength = textToType.length;
      this.setState({ displayText: textToType });
    }
  }
  render() {
    const { textDisplay } = this.state;

    return (
      <div>
        <div className="hero" />
        <div className="hero__terminal">
          {console.log(this.state)}
          <pre>
            <code className="shell-session demo">~ ${textDisplay}</code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Home;
