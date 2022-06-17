import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function FooterPostTextSide(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 8pt;
  margin-left: 10px;
  display: inline-block;
  color: #dbdbdb;
`;
export default FooterPostTextSide;
