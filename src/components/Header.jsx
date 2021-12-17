import React from "react";
import Nav from "./Nav";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="mt-5">
      <h1 className="name">Blake McCarty</h1>
      <div className="row">
        <h2 className="col title">Creative Coding</h2>
      </div>
      <Nav />
    </header>
  );
}
