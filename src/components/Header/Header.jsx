import React from "react";
import { Container } from "react-bootstrap";

const Header = (props) => {
  return <Container>{props.children}</Container>;
};

export default Header;
