import React from 'react';
import '../styling/projects.css';

function Projects() {
  return (
    <div className="container-content">
        <div className="wrapper"><div className="title"><h2>Projects</h2></div></div>
        <div className="wrapper">
            <div className="nameandgraduation">
                <h3>Automated Snooker Counter</h3>
            </div>
            <div className="description">
                <ul>
                    <li>
                        Designing an application to record videos of users playing snooker as input and calculating the corresponding player’s
current score live, automating the tedious process of counting scores in the game.
                    </li>
                    <li>
                        Used Roboflow’s YOLOv5 object detection algorithm to detect different types of objects and actions in the video. 
                    </li>
                </ul>
            </div>
        </div>
        <div className="wrapper">
            <div className="nameandgraduation">
                <h3>Illinois Geometry Lab at University of Illinois, Urbana-Champaign</h3>
            </div>
            <div className="description">
                <ul>
                    <li>
                    Built an online course as a part of a 3-member team with the aim of raising high schoolers’ interest in Fractal Geometry.
                    </li>
                    <li>
                    Designed the front end UIX through Canva, which was implemented in React.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Projects;