import React, { useState } from "react";

function ColorBall(props) {
  const [color] = useState(props.back);

  const border = {
    width: `1.1979vw`,
    height: `1.1979`,
    borderRadius: `50%`,
    backgroundColor: `${color}`,
    display: `inline-block`,
    margin: `0`,
    marginTop: `0.2604vw`,
    marginRight: `0.2604vw`,
    marginLeft: `0.2604vw`,
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
