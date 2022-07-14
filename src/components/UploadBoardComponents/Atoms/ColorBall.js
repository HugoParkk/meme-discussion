import React, { useState } from "react";

function ColorBall(props) {
  const [color] = useState(props.back);

  const border = {
    width: `23px`,
    height: `23px`,
    borderRadius: `50%`,
    backgroundColor: `${color}`,
    display: `inline-block`,
    margin: `0`,
    marginTop: `5px`,
    marginRight: `5px`,
    marginLeft: `5px`,
    cursor: `pointer`,
  };

  const sendColor = (e) => {
    props.getColor(color);
  };

  return (
    <>
      <div style={border} onClick={sendColor} />
    </>
  );
}

export default ColorBall;
