// Base functional component
import { useState } from "react";
const Shape = ({ width, height }) => {
  const [dimensions, setDimensions] = useState({ width, height });

  return (
    <div>
      <p>Width: {dimensions.width}</p>
      <p>Height: {dimensions.height}</p>
    </div>
  );
};
export default Shape;
