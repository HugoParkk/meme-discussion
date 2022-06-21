import React from "react";
import styled from "styled-components";
import ColorBall from "../Atoms/ColorBall";

function LeftColorArea(props) {
  return (
    <Color>
      {props.data.map((arr, i) => {
        return <ColorBall color={arr} key={i} />;
      })}
    </Color>
  );
}

const Color = styled.div`
  width: 100%;
  height: 110px;
  display: block;
  position: relative;
`;

export default LeftColorArea;
