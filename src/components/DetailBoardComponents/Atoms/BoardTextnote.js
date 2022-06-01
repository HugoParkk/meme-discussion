import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTextnote(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.note}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-block;
`;
export default BoardTextnote;
