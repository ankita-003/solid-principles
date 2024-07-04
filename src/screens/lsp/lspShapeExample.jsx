"use client";
import React, { useState } from "react";
// import Shape from "../../components/shapes/shapeBase";
import Rectangle from "@/screens/lsp/components/shapes/rectangleDerived";
import Square from "@/screens/lsp/components/shapes/squareDerived";

const LspShapeExample = () => {
  return (
    <div>
      <Rectangle width={40} height={30} />
      <Square sideLength={10} />
    </div>
  );
};
export default LspShapeExample;
