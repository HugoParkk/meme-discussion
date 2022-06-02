import React from "react";
import styled from "styled-components";
import PinkAreaTextGroup from "./PinkAreaTextGroup";
import PinkAreaBottomText from "../Atoms/PinkAreaBottomText";

function GradePinkArea(props) {
  return (
    <StyledDiv>
      {props.data.map((arr, i) => {
        return (
          <div key={i}>
            <PinkAreaTextGroup text={arr.text} subText={arr.subText} />
            <br />
          </div>
        );
      })}
      <PinkAreaBottomText data={props.arr} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 20px 2%;
  background: pink;
`;

export default GradePinkArea;
