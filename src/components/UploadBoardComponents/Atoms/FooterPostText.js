import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function FooterPostText() {
  return (
    <>
      <GlobalStyle />
      <Text>짤 설명 사진</Text>
    </>
  );
}
const Text = styled.div`
  color: #ff50e2;
  display: inline-block;
  font-size: 13pt;
  font-weight: bold;
`;
export default FooterPostText;
