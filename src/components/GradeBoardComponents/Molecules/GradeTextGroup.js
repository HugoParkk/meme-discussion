import React from "react";
import styled from "styled-components";
import GradeImage from "../Atoms/GradeImage";
import GradeSubText from "../Atoms/GradeSubText";
import GradeText from "../Atoms/GradeText";

function GradeTextGroup(props) {
  return (
    <>
      {props.data.map((arr, i) => {
        return (
          <StyledDiv key={i}>
            {arr.img === "yes" ? <GradeImage src={arr.src} /> : <></>}
            <GradeText text={arr.text} type={arr.type} />
            <GradeSubText text={arr.subText} />
            <br />
          </StyledDiv>
        );
      })}
    </>
  );
}

const StyledDiv = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export default GradeTextGroup;
