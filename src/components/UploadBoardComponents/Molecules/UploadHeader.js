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
  border: 5px solid #a0a0a0;
  outline: 3px solid black;
  padding: 15px;
  width: 1074px;
  margin: 10px auto;
  position: relative;
  background-color: white;
  top: 30px;
`;

export default UploadHeader;
