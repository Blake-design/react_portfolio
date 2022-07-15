import React from "react";
import selfPortrait from "../../assets/photos/piano-BW-self.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./bio.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Bio = () => {
  return (
    <Container as="article">
      <Col>
        <Row>
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center align-items-center photo-border "
          >
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              className="text-above"
            >
              <h3 className="bioH3">About Me</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <img className=" photo" src={selfPortrait} alt="self portrait" />
            </AnimationOnScroll>
          </Col>

          <Col className="d-flex justify-content-center align-items-center ">
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              className="text-above"
            >
              <p className="bioP">
                <b>Creation is what drives me.</b> <br />I started my career as
                a journalist and for nearly a decade, I traveled to different
                communities learning about life and sharing peoples stories. I
                continued that thread as I moved into advertising and directed a
                weekly webseries about local history.
              </p>
            </AnimationOnScroll>
          </Col>
        </Row>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className="text-above"
        >
          <p className="bioP">
            After sharing the stories of others for years, I decided it was time
            to write my own next chapter. <b>Which brings us here.</b>
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <p className="bioP">
            I started my coding journey in the summer of 2021. After 8 months of
            intensive study in the University of Texas at San Antonio Web
            Development Bootcamp, I'm now a certifed Full Stack Developer. So
            here's to starting fresh and <b>hoping to</b> use my budding
            skillset to
            <b> create something new.</b>
          </p>
        </AnimationOnScroll>
      </Col>
    </Container>
  );
};

export default Bio;
