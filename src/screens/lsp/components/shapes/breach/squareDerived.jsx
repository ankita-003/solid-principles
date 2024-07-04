// Derived functional component 2
import { useState } from "react";

const Square = ({ sideLength }) => {
  const [dimensions, setDimensions] = useState({
    width: sideLength,
    height: sideLength,
  });

  return (
    <div className="mt-4">
      <p>Square Dimensions:</p>
      <p>Width: {dimensions.width}</p>
      <p>Height: {dimensions.height}</p>
    </div>
  );
};
export default Square;
