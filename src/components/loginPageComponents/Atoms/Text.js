import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function Text(props) {
  return (
    <>
      <GlobalStyle />
      {props.type === "big" ? (
        <StyledABig href="#">{props.text}</StyledABig>
      ) : (
        <StyledASmall href="#">{props.text}</StyledASmall>
      )}
    </>
  );
}

const StyledABig = styled.a`
  font-size: 13pt;
  text-decoration: none;
  color: black;
`;
const StyledASmall = styled.a`
  font-size: 12pt;
  text-decoration: none;
  color: black;
`;
export default Text
