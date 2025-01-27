import React from "react";
import "../styling/projects.css";
import SnookerImage from "./../images/AutomatedSnookerCounterImage.png";
import KochImage from "./../images/KochImage.gif";

function Projects() {
  return (
    <div className="container-projects">
      <div className="wrapper">
        <div className="title-projects">
          <h2>Projects</h2>
        </div>
        <div className="projects-content">
          <a href="https://youtu.be/CLd6Z4GlJ8s" target="_blank">
            <div className="projects-entry">
              <div className="projects-image">
                <img src={SnookerImage}></img>
              </div>
              <div className="projects-data">
                <div className="projects-data-title">
                  <p>Automated Snooker Counter</p>
                </div>
                <div className="projects-data-description">
                  <p>
                    Snooker is a cue sport which involves players scoring points
                    by potting balls in a specific order on a
                    green-cloth-covered rectangular table. Due to its unique
                    scoring system, snooker matches require players to multitask
                    between gameplay and scorekeeping, thereby causing focus
                    disruptions in a sport requiring high concentration.
                  </p>
                  <p>
                    The current system uses a live video stream from an overhead
                    camera view of the table, which is then processed using
                    computer vision to calculate scores. To broaden the
                    applicability of this system, I utilized Ultralytics YOLO
                    real time object detection model to track the balls from a
                    front camera view instead. This removes the prerequisite of
                    the overhead camera which provides the unobstructed view of
                    the table and balls, allowing anyone with a tripod and
                    smartphone camera to employ the system, thereby vastly
                    increasing its applicability.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <div className="projects-entry">
            <div className="projects-image">
              <img src={KochImage}></img>
            </div>
            <div className="projects-data">
              <div className="projects-data-title">
                <p>Online Learning Website with the IML at UIUC</p>
              </div>
              <div className="projects-data-description">
                <p>
                  As part of a 3 member team, I solely developed the frontend of
                  an interactive online course targeted towards high school
                  students, with the aim of raising awareness on uncommon topics
                  in mathematics, in this case, Fractal Geometry.
                </p>
                <p>
                  In collaboration with my groupmates, we formulated a brief
                  curriculum on Fractal Geometry. Combined with functionalities
                  such as interactive activities, visualizations and quizzes,
                  the online learning platform aimed to overcome the limitations
                  set by the COVID-19 pandemic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
