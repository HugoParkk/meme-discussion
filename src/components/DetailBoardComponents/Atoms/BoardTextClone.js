import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTextClone() {
  return (
    <>
      <GlobalStyle />
      <Text>{`짤 속성`}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 13px;
  display: inline-block;
  position: relative;
  bottom: 35px;
`;
export default BoardTextClone;
