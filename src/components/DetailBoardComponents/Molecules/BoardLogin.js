import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import BoardWrap from "./BoardWrap";
import BoardHeaderOther from "../Molecules/BoardHeaderOther";

function BoardLogin(props) {
  return (
    <>
      <GlobalStyle />
      <Contents>
        <BoardWrap data={props.data} />
        <BoardHeaderOther cnt={props.data.cnt} />
      </Contents>
    </>
  );
}

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
`;

export default BoardLogin;
