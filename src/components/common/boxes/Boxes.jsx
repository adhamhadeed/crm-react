import React from "react";
import Box from "./Box";

function Boxes({ list }) {
  return (
    <div className="boxes">
      {list.map((box) => (
        <Box key={box.id} {...box} />
      ))}
    </div>
  );
}

export default Boxes;
