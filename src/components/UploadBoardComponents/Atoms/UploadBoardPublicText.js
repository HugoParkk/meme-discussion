import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function UploadBoardPublicText(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 13pt;
  font-weight: bold;
  margin-bottom: 5px;
  width: 60%;
  grid-column: 1 / 2;
`;

export default UploadBoardPublicText;
