import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardPlus() {
  return (
    <>
      <GlobalStyle />
      <Text>거래자</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-right: 13px;
  display: inline-block;
`;

export default BoardPlus;
