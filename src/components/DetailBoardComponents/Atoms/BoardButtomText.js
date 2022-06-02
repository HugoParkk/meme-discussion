import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardButtomText() {
  return (
    <>
      <GlobalStyle />
      <Text>직접거래 시 아래 사항에 유의해주세요.</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 12pt;
  font-weight: bold;
  color: #999999;
`;
export default BoardButtomText;
