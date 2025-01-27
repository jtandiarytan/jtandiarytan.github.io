import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SuperSEO } from "react-super-seo";
import "../styling/about.css";

function About() {
  return (
    <div className="container-about">
      <div className="purpose">
        <p>
          Drawn by the sheer potential and applicability of CS and Software, I
          made the switch from Physics into Computer Science in 2021. I started
          my journey with React, aiming to gain the ability to bring
          applications to life. Fast forward to today, and I have had the
          priviledge to apply my efforts to the real world, building software
          for a{" "}
          <a href="https://echopixeltech.com/" target="_blank">
            medical tech start-up
          </a>
          , an{" "}
          <a href="https://www.blibli.com/" target="_blank">
            e-commerce provider
          </a>
          , a{" "}
          <a href="https://technosoftautomotive.com/" target="_blank">
            CRM software consulting firm
          </a>
          , and a{" "}
          <a href="https://iml.math.illinois.edu/" target="_blank">
            mathematics research group at UIUC
          </a>
          .
        </p>
        <p>
          Currently, I have developed an interest in Distributed Systems. I am
          looking forward to going into a masters program starting in Fall 2024
          to dive deep into these topics. I am actively looking for a software
          engineer intern role for the Fall/Summer of 2025.
        </p>
        <p>
          When I'm not at the computer, I love playing snooker and billiards, my
          cherished hobby of 7 years and counting. One of my personal projects,
          the automated snooker counter, aims to revolutionize snooker by
          incorporating ML and CV. I have also had the chance to contribute to
          the community at UIUC, founding the{" "}
          <a
            href="https://www.youtube.com/@illinibilliardsclub4955"
            target="_blank"
          >
            IlliniBilliardsClub
          </a>
          , the one and only university billiards/pool organization. I have also
          just dipped my feet in a{" "}
          <a
            href="https://www.youtube.com/watch?v=nnDLXeJrPtQ&t=4s&ab_channel=CaliforniaSnooker"
            target="_blank"
          >
            semi-professional tournament
          </a>{" "}
          recently, check it out!
        </p>
      </div>
    </div>
  );
}

export default About;
