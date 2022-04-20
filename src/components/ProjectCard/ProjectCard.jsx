import React from "react";
import "./projectCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProjectCard = ({ project }) => {
  return (
    <AnimationOnScroll animateIn="animate__slideInRight">
      <Card
        className="card-custom"
        style={{ border: "2rem double #cce2e2" }}
        key={project.id}
      >
        <Card.Img
          variant="top"
          className="card-image-top "
          src={require(`../../assets/photos/${project.imageUrl}`)}
          style={project.animate && project.animate}
          alt={project.alt}
        />
        <Card.Body className="card-body">
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.desc}</Card.Text>
          <Button style={{ backgroundColor: "#c490c3", border: "none" }}>
            {project.CTA}
          </Button>
        </Card.Body>
      </Card>
    </AnimationOnScroll>
  );
};

export default ProjectCard;
