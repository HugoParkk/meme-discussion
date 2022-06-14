import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightSideBarTitle(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.Text}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 13pt;
  font-weight: bold;
  display: inline;
`;
export default RightSideBarTitle;
