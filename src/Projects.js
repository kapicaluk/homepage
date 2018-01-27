import React, { Component } from "react";
import "./Projects.css"
import viewtrition from './assets/viewtrition.png'

class Projects extends Component {
  render() {
    return <div className="projects">
        <div className="col">
          <h1 className="projects-head">Viewtrition</h1>
          <img src={viewtrition} className="projects-img" />
          <p className="projects-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin
            eam, quam Hieronymus, ne fecisset idem, ut voluptatem illam
            Aristippi in prima commendatione poneret. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum
          </p>
        </div>
        <div className="col">
          <h1 className="projects-head">Viewtrition</h1>
          <img src={viewtrition} className="projects-img" />
          <p className="projects-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin
            eam, quam Hieronymus, ne fecisset idem, ut voluptatem illam
            Aristippi in prima commendatione poneret. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum
          </p>
        </div>
        <div className="col">
          <h1 className="projects-head">Viewtrition</h1>
          <img src={viewtrition} className="projects-img" />
          <p className="projects-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin
            eam, quam Hieronymus, ne fecisset idem, ut voluptatem illam
            Aristippi in prima commendatione poneret. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum
          </p>
        </div>
      </div>;
  }
}

export default Projects;
