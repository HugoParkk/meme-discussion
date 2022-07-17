import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightSideBarTitle(props) {
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
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 40px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding-bottom: 14px;
  border-bottom: 2px solid #dbdbdb;
`;

const PinkText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ff50e2;
  width: 100%;
  height: 50px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding-bottom: 14px;
  border-bottom: 2px solid #dbdbdb;
`;
export default RightSideBarTitle;
