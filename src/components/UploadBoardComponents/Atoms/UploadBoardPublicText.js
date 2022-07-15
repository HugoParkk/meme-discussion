import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function UploadBoardPublicText(props) {
  return (
    <>
      <GlobalStyle />
      {props.type === "pink" ? (
        <>
          <PinkText>{props.text}</PinkText>
        </>
      ) : (
        <>
          <Text>{props.text}</Text>
        </>
      )}
    </>
  );
}
const Text = styled.div`
  font-size: 13pt;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  width: 60%;
  justify-self: flex-end;
`;
const PinkText = styled.div`
  font-size: 12pt;
  font-weight: bold;
  color: #ff50e2;
  margin-top: 10px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  justify-self: flex-end;
`;
export default UploadBoardPublicText;
