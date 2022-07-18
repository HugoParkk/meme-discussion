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
  margin-top: 27.42px;
  margin-right: 9px;
  display: flex;
  justify-content: center;
`;

export default GradeButtonGroup;
