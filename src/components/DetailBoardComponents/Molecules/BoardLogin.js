import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import BoardWrap from "./BoardWrap";
import BoardHeaderOther from "../Molecules/BoardHeaderOther";

function BoardLogin(props) {
  const arr = props.data;
  return (
    <>
      <GlobalStyle />
      <Contents>
        <BoardWrap data={arr.data} />
        <BoardHeaderOther cnt={arr.cnt} />
      </Contents>
    </>
  );
}

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export default BoardLogin;
