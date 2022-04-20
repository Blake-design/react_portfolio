import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const CategoryMenu = (projects) => {
  const [state, setState] = useState();

  function handleClick(e) {
    console.log(e);
  }

  return (
    <ButtonGroup size="lg" className="m-2 d-flex justify-content-center">
      <Button
        className="m-4 w-25 rounded"
        name={"one"}
        onClick={(e) => {
          handleClick();
        }}
      >
        Full-Stack
      </Button>
      <Button className="m-4 w-25">Front-End</Button>
      <Button className="m-4 w-25">CMS</Button>
    </ButtonGroup>
  );
};

export default CategoryMenu;
