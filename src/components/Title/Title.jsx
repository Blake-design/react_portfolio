import React from "react";
import Row from "react-bootstrap/Row";
import "./title.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Title = ({ title, subtitle }) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <Row as="article" className="text-center">
        <h3 className="portfolioH3">{title}</h3>
        <p className="portfolioP">{subtitle}</p>
      </Row>
    </AnimationOnScroll>
  );
};

export default Title;
