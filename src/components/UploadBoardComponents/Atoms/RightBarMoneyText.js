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
  font-size: 12px;
  color: #999999;
  float: right;
`;
export default RightBarMoneyText;
