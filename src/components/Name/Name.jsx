import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./name.css";

const Name = ({ bio, bio: { name } }) => {
  return (
    <Container
      as="section"
      className="text-center d-flex justify-content-center align-items-center"
      style={{ postion: "relative" }}
    >
      <div className="name-bg p-0">B</div>

      <div className="name-fg" style={{ postion: "absolute" }}>
        <h1 className="name">{`${name.first} ${name.last}`}</h1>
        <h2 className="title">{bio.title}</h2>
      </div>
    </Container>
  );
};
export default Name;
