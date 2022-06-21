import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function FooterPostText(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </>
  );
}
const Text = styled.div`
  color: #ff50e2;
  display: inline-block;
  font-size: 13pt;
  font-weight: bold;
  width: 95%;
  transform: translateX(-50%);
  left: 50%;
  position: relative;
`;

export default FooterPostText;
