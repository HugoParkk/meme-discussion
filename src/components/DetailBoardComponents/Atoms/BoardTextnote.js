import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTextnote(props) {
  return (
    <Text>
      <GlobalStyle />
      <Text>{props.note}</Text>
    </Text>
  );
}
const Text = styled.div`
  font-size: 10pt;
  margin-bottom: 10px;
  display: inline-block;
`;
export default BoardTextnote;
