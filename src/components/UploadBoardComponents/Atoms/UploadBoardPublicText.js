import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function UploadBoardPublicText() {
  return (
    <>
      <GlobalStyle />
      <Text>{"공개설정 "}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 13pt;
  font-weight: bold;
`;
export default UploadBoardPublicText;
