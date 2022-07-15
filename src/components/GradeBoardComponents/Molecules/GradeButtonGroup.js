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
  width: 70%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export default GradeButtonGroup;
