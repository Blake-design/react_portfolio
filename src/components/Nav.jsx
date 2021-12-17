import React from "react";
import "../styles/Nav.css";

export default function nav() {
  return (
    <nav className="col d-flex justify-content-end align-items-center">
      <ul className="nav align-items-center">
        <li className="nav-item">
          <a
            className="nav-link"
            aria-current="page"
            href="/assets/Resume-Blake-McCarty.pdf"
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/blake-mccarty-75754a36/"
          >
            <img src="/assets/LI-In-Bug.png" className="logos" alt="LinkedIn" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/Blake-design">
            <img
              src="/assets/GitHub-Mark-Light-120px-plus.png"
              className="logos"
              alt="GitHub"
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mailto: blake_mccarty@yahoo.com">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
