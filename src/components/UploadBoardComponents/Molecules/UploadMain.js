import React from "react";
import styled from "styled-components";
import FooterPostText from "./FooterPostText";
import Line from "../Atoms/Line";
import UploadImgArea from "./UploadImgArea_copy";
import ImgAndList from "./ImgAndList";
import GlobalStyle from "../GlobalStyle";

function UploadMain(props) {
  return (
    <Wrap>
      <Main>
        <GlobalStyle />
        <FooterPostText text="짤 업로드" />
        <UploadImgArea frame={props.frame} back={props.back} src={props.src} />
        <Line />
        <FooterPostText
          text="짤 설명 사진"
          subText="게시하려는 짤과 비슷하거나 짤의 비하인드를 이해할 수 있는 짤을 첨부해 주세요."
        />
        <ImgAndList data={props.data} text={props.text} />
        <FooterPostTextTag
          type="text"
          placeholder="#태그를 입력해 주세요 (최대 10개)"
        ></FooterPostTextTag>
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 56vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 83px;
  padding: 0;
`;

const Main = styled.div`
  display: block;
  width: 45.25vw;
  height: 43.3333vw;
  border: 0.2604vw solid #ffd4ed;
  outline: 0.1563vw solid black;
  padding: 0.2604vw;
  font-size: 1.2rem;
`;

const FooterPostTextTag = styled.input`
  font-size: 0.8vw;
  position: relative;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  height: 2vw;
  line-height: 5%;
  color: #676767;
  background-color: transparent;
  border: none;

  & {
    outline: none;
  }
`;

export default UploadMain;
