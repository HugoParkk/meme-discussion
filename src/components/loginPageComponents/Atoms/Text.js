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
  font-size: 15px;
  text-decoration: none;
  color: white;
`;
const StyledASmall = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: white;
`;
export default Text;
