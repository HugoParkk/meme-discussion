import React from "react";
import styled from "styled-components";

function HeaderText(props) {
  return (
    <>
      {props.type === "title" ? (
        <StyledTitle>{props.text}</StyledTitle>
      ) : (
        <StyledText>{props.text}</StyledText>
      )}
    </>
  );
}

const StyledTitle = styled.div`
  font-size: 1.3333vw;
  font-weight: bold;
  display: inline-block;
  line-height: 2.2917vw;
`;

const StyledText = styled.div`
  display: inline-block;
  font-size: 0.8333vw;
  line-height: 2.2917vw;
`;

export default HeaderText;
