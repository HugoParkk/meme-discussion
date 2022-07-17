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
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  line-height: 44px;
`;

const StyledText = styled.div`
  text-align:right;
  padding-right: 16px;
  width: 50rem;
  display: inline-block;
  font-size: 14px;
  line-height: 44px;
`;

export default HeaderText;
