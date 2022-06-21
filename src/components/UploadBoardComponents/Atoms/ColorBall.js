import React from "react";

function ColorBall(props) {
  const style = {
    width: `25px`,
    height: `25px`,
    borderRadius: `50%`,
    backgroundColor: `${props.color}`,
    display: `inline-block`,
    margin: `0`,
    marginTop: `5px`,
    marginRight: `5px`,
    marginLeft: `5px`,
  };

  return <div style={style} />;
}

export default ColorBall;
