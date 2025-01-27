import React, { useState } from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Popover, Whisper } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "../styling/title.css";

function Title() {
  const [emailText, setEmailText] = useState("Copy Email: jttan3@illinois.edu");
  const [phoneText, setPhoneText] = useState("Copy Phone: +1 217-979-8138");
  return (
    <div className="container-title" id="About">
      <div className="heading">
        <h1>Tan Jeremy Tandiary</h1>
        <h2>Software Engineer, UIUC 2023</h2>
      </div>
      <ul className="links">
        <li>
          <a
            href="https://www.linkedin.com/in/jeremy-tandiary-tan/"
            target="_blank"
          >
            <FontAwesomeIcon className="fa-xl" icon={faLinkedin} />
          </a>
        </li>
        <li>
          <Whisper
            followCursor
            trigger="hover"
            delayClose={10}
            onClick={() => setEmailText("Email Copied")}
            onExit={() => setEmailText("Copy Email: jttan3@illinois.edu")}
            speaker={
              <Popover className="email-popup">
                <p>{emailText}</p>
              </Popover>
            }
          >
            <button
              onClick={() =>
                navigator.clipboard.writeText("jttan3@illinois.edu")
              }
            >
              <FontAwesomeIcon className="fa-xl " icon={faEnvelope} />
            </button>
          </Whisper>
        </li>
        <li>
          <Whisper
            followCursor
            trigger="hover"
            delayClose={10}
            onClick={() => setPhoneText("Phone Copied")}
            onExit={() => setPhoneText("Copy Phone: +1 217-979-8138")}
            speaker={
              <Popover className="email-popup">
                <p>{phoneText}</p>
              </Popover>
            }
          >
            <button
              onClick={() => navigator.clipboard.writeText("12179798138")}
            >
              <FontAwesomeIcon className="fa-xl " icon={faPhone} />
            </button>
          </Whisper>
        </li>
      </ul>
    </div>
  );
}

export default Title;
