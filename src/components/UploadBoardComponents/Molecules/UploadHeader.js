import React from "react";
import styled from "styled-components";
import HeaderImg from "../Atoms/HeaderImg";
import HeaderText from "../Atoms/HeaderText";

import img1 from "../../../images/Vector-1.svg";
import img2 from "../../../images/그룹 962.svg";

function UploadHeader() {
  return (
    <StyledDiv>
      <StyledWrap>
        <HeaderImg src={img1} type="bigger" />
        <HeaderText text="짤 게시하기" type="title" />
      </StyledWrap>
      <StyledWrap>
        <HeaderText text="지갑에서 가져오기" />
        <HeaderImg src={img2} />
      </StyledWrap>
    </StyledDiv>
  );
}

const StyledWrap = styled.div`
  display: flex;
  justify-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.2604vw solid #a0a0a0;
  outline: 0.1563vw solid black;
  padding: 0.7813vw;
  width: 56vw;
  margin: 0.5208vw auto;
  position: relative;
  background-color: white;
  top: 30px;
`;

export default UploadHeader;
