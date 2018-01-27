import React, { Component } from "react";
import './About.css'
import avatar from './assets/avatar.jpg'

class About extends Component {
  render() {
    return <div className="about">
        <div className="bio-text">
          <h1 className="bio-head">About mee</h1>
          <img src={avatar} />
          <p className="bio-body">
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
            <p>Readymade aesthetic blue bottle bicycle
            rights raw denim pabst taxidermy flexitarian meh ramps neutra
            fanny pack. Sustainable shabby chic snackwave tote bag
            cold-pressed. IPhone hexagon ethical paleo coloring book,
            gastropub wolf chillwave locavore pour-over glossier. Squid
            craft beer chartreuse distillery. PBR&B meditation blog pork
            belly.
          </p>
        </div>
      </div>;
  }
}

export default About;
