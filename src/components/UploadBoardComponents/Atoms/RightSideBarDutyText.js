import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightSideBarDutyText(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
      <Text2>{props.percent}</Text2>
    </>
  );
}
const Text = styled.div`
  font-size: 0.9167vw;
  color: #dbdbdb;
  margin-top: 0.5208vw;
  display: inline;
`;
const Text2 = styled.div`
  font-size: 0.9167vw;
  margin-top: 0.5208vw;
  color: #dbdbdb;
  display: inline;
  text-align: right;
`;
export default RightSideBarDutyText;
