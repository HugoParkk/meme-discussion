import React from "react";
import styled from "styled-components";
import GradeButton from "../Atoms/GradeButton";

function GradeButtonGroup(props) {
  return (
    <StyledDiv>
      {props.data.map((arr, i) => {
        return <GradeButton text={arr.text} type={arr.type} key={i} />;
      })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flexbox;
  justify-content: center;
`;

export default GradeButtonGroup;
