import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects }) => {
  return (
    <Container as="main">
      <Row>
        {projects.map((project) => {
          return (
            <Col
              key={project.id}
              className="gy-5 m-3 mb-5 d-flex justify-content-center"
            >
              <ProjectCard project={project} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProjectGrid;
