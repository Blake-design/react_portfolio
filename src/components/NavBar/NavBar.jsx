import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "./navBar.css";
import linkedInIcon from "../../assets/icons/LI-In-Bug.png";
import githubIcon from "../../assets/icons/GitHub-Mark-64px.png";
import resume from "../../assets/Blake_McCarty_Resume.pdf";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ bio }) => {
  return (
    <Navbar className="justify-content-end">
      <Nav.Item>
        <Nav.Link href={resume} target="_blank">
          Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={bio.linkedIn}>
          <Image src={linkedInIcon} className="logos" alt="LinkedIn" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={bio.github}>
          <Image src={githubIcon} className="logos" alt="GitHub" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="mailto: blake_mccarty@yahoo.com">Contact</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default NavBar;
