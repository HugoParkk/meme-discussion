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
        <HeaderImg src={img1} type="" />
        <HeaderText text="짤 게시하기" type="title" />
      </StyledWrap>
      <StyledWrap>
        <HeaderText text="지갑에서 가져오기" />
        <HeaderImg src={img2} type="bigger" />
      </StyledWrap>
    </StyledDiv>
  );
}

const StyledWrap = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 4px solid #cfcfcf;
  outline: 2px solid black;
  padding: 15px;
  width: 1080px;
  height: 84px;
  margin: 0px auto;
  margin-top: 36px;
  background-color: white;
  letter-spacing: -0.7px;
`;


export default UploadHeader;
