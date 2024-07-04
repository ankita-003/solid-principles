"use client";
import React, { useState } from "react";
import Shape from "../../components/shapes/shapeBase";
import Rectangle from "../../components/shapes/rectangleDerived";
import Square from "../../components/shapes/breach/squareDerived";
const LspShapeExample = () => {
  return (
    <div>
      <Rectangle width={20} height={30} />
      <Square sideLength={20} />
    </div>
  );
};
export default LspShapeExample;
