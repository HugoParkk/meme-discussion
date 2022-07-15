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
  font-size: 16pt;
  font-weight: bold;
  display: inline-block;
  line-height: 44px;
`;

const StyledText = styled.div`
width: 50rem;
  display: inline-block;
  font-size: 18pt;
  font-weight: bold;
  line-height: 44px;
`;

export default HeaderText;
