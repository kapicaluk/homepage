import React, { Component } from "react";
import './About.css'
import avatar from './assets/avatar.jpg'

class About extends Component {
  render() {
    return <div className="about">
        <div className="bio-text">
          <h1 className="bio-head">About me</h1>
          <img src={avatar} />
          <div className="bio-body">
          <p>
            You probably haven't heard of them chia microdosing readymade
            helvetica. Shoreditch offal bushwick pinterest pour-over swag
            kickstarter, enamel pin cronut hoodie truffaut. Before they sold
            out cold-pressed fam chartreuse. Jean shorts craft beer yr
            vinyl, kinfolk kickstarter bitters master cleanse before they
            sold out health goth retro shaman. Poke chia ethical gentrify,
            stumptown literally kale chips banjo drinking vinegar 90's. Food
            truck dreamcatcher before they sold out mlkshk, kinfolk leggings
            hoodie celiac. Blue bottle lyft pop-up, scenester before they
            sold out forage bitters af dreamcatcher vape meggings mumblecore
            biodiesel kickstarter.</p>
            </div>
        </div>
      </div>
  }
}

export default About;
