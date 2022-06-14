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
`;

const PinkText = styled.div`
  font-size: 13pt;
  font-weight: bold;
  color: #ff50e2;
`;
export default RightSideBarTitle;
