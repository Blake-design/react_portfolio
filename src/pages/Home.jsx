import React from "react";
import Header from "../components/Header/Header";
import Name from "../components/Name/Name";
import Featured from "../components/Featured/Featured";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar/NavBar";
import profileData from "../assets/profileData.json";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";

import Title from "../components/Title/Title";
import Bio from "../components/Bio/Bio";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import "./home.css";

const Home = () => {
  const { bio, projects } = profileData;
  return (
    <>
      <Header>
        <NavBar bio={bio} />
        <Name bio={bio} />
      </Header>
      <section className="portfolio-section">
        <Title
          title="Portfolio"
          subtitle="A full stack of programs from front to back"
        />
        <ProjectGrid projects={projects} />
      </section>

      <section className="bio-section">
        <Bio />
      </section>
    </>
  );
};

export default Home;
