import React, { Component } from "react";
import Typing from "react-typing-animation";

class HeroText extends Component {
  render() {
    return <div>
        <h1>
          <Typing>
            <span>This span will get typed.</span>
          </Typing>
        </h1>
      </div>;
  }
}

export default HeroText;
