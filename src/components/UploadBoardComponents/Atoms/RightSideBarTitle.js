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
  font-size: 13pt;
  font-weight: bold;
  width: 100%;
  height: 50px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  border-bottom: 2px solid gray;
`;

const PinkText = styled.div`
  font-size: 13pt;
  font-weight: bold;
  color: #ff50e2;
  width: 100%;
  height: 50px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  border-bottom: 2px solid gray;
`;
export default RightSideBarTitle;
