import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightBarMoneyText(props) {
  return (
    <>
      <GlobalStyle />
      <Money>{props.text}</Money>
    </>
  );
}
const Money = styled.div`
  font-size: 10pt;
  color: #dbdbdb;
  float: right;
`;
export default RightBarMoneyText;
