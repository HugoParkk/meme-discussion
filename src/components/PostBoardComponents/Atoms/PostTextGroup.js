import React from "react";
import styled from "styled-components";
import GradeImage from "../../GradeBoardComponents/Atoms/GradeBoardImg";
import GradeSubText from "../../GradeBoardComponents/Atoms/GradeSubText";
import GradeText from "../../GradeBoardComponents/Atoms/GradeText";

function PostTextGroup(props) {
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
  width: 88%;
  margin: 0 auto;
`;

export default PostTextGroup;
