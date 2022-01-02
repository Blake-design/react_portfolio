import React, { useState } from "react";
import "../styles/Card.css";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { BsCircle, BsCircleFill } from "react-icons/bs";
export default function Card({ projects }) {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <BiLeftArrow className="left-arrow" onClick={prev} />
      <BiRightArrow className="right-arrow" onClick={next} />
      {projects.map((project, index) => {
        return (
          <>
            <div
              className={index === current ? "activeCard" : "nextCard"}
              key={index}
            >
              <div className="col" key={project.id}>
                <div className="card text-center bg-black m-0">
                  <div>
                    <img
                      src={project.imageURL}
                      className=" card-img-top p-5"
                      style={project.animate}
                      alt={project.alt}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title p-2 ">{project.name}</h5>
                    <p className="card-text text-white">
                      {project.description}
                    </p>
                    <a href={project.link} className="btn btn-primary">
                      {/* CTA stands for Call to Action */}
                      {project.CTA}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="circleContainer">
        {projects.map((project, index) => {
          const select = () => {
            setCurrent(index);
          };

          if (current === index) {
            return <BsCircleFill className="circle" key={index} />;
          }
          return <BsCircle className="circle" key={index} onClick={select} />;
        })}
      </div>
    </div>
  );
}
