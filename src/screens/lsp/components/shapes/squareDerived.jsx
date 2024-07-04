// Derived functional component 2
import { useState } from "react";
import Shape from "./shapeBase";

const Square = ({ sideLength }) => {
  return (
    <div className="mt-4">
      <p>Square Dimensions:</p>
      <Shape width={sideLength} height={sideLength} />
    </div>
  );
};
export default Square;
