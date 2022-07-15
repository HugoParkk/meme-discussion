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
  font-size: 1.1rem;
  color: #dbdbdb;
  margin-top: 10px;
  display: inline;
`;
const Text2 = styled.div`
  font-size: 1.1rem;
  margin-top: 10px;
  color: #dbdbdb;
  display: inline;
  text-align: right;
`;
export default RightSideBarDutyText;
