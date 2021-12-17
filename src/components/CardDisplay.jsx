import React from "react";
import Card from "./Card";

const projects = [
  {
    id: 1,
    name: "Space EMS",
    description:
      "Space EMS is an Asteroids clone built using a MVC framework and P5.js.",
    link: "https://space-ems.herokuapp.com/",
    imageURL: "/assets/spaceShip.svg",
    alt: "Space EMS Cover",
    animate: {
      animation: "spinner 3s infinite linear",
    },
    CTA: "Play Now",
  },
  {
    id: 2,
    name: "Game Finder",
    description:
      "Built with Pure CSS and Jquery, Game Finder utilizes 3rd party APIs to find popular games on sale.",
    link: "https://blake-design.github.io/project1_videoGameFinder",
    imageURL: "/assets/pexels-francesco-ungaro-1670977-600-412.jpg",
    alt: "Game Finder front page",
    CTA: "Search Now",
  },
  {
    id: 3,
    name: "Note Taker",
    description:
      "Built using Express.js, Note Taker, utilizes its own API to create a dynamic Notepad.",
    link: "https://blakes-notetaker.herokuapp.com/",
    imageURL: "/assets/pexels-pixabay-236111-300-200.jpg",
    alt: "Photo of a note pad",
    CTA: "Open",
  },
  {
    id: 4,
    name: "Quiz Time",
    description:
      "A multiple choice quiz to test your knowledge of The IT Crowd ",
    link: "https://blake-design.github.io/BlakeMcCarty_week_4_HW",
    imageURL: "/assets/pexels-photo-356079-600-380.jpeg",
    alt: "Photo of a question mark written on a blackboard",
    CTA: "Test Me",
  },
  {
    id: 5,
    name: "Weather App",
    description: "A dynamic weather app built with 3rd party APIs",
    link: "https://blake-design.github.io/BlakeMcCarty_week_4_HW",
    imageURL: "/assets/pexels-photo-2114014.jpeg",
    alt: "photo of clouds",
    CTA: "Click Here",
  },
];
export default function CardInfo() {
  return (
    <div className="row">
      <Card projects={projects} />
    </div>
  );
}
