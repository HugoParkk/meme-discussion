import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightBarMoneyText() {
  return (
    <>
      <GlobalStyle />
      <Money>{"758,60"}</Money>
    </>
  );
}
const Money = styled.div`
  font-size: 8pt;
  color: #dbdbdb;
  float: right;
`;
export default RightBarMoneyText;
