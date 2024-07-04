// Derived functional component 1

import React from "react";
import Shape from "./shapeBase";

// Derived functional component 1
const Rectangle = ({ width, height }) => {
  return (
    <>
      <p className="mt-4">Rectangle Dimensions:</p>
      <Shape width={width} height={height} />{" "}
    </>
  );
};

export default Rectangle;
