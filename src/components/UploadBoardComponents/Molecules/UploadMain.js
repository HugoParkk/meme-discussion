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
  width: 67.1rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 83px;
`;

const Main = styled.div`
  display: block;
  width: 54.3rem;
  height: 52rem;
  border: 5px solid rgba(0, 0, 0, 0);
  outline: 3px solid black;
  padding: 10px;
  font-size: 1.2rem;
`;

const FooterPostTextTag = styled.input`
  font-size: 0.9rem;
  position: relative;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  height: 3em;
  line-height: 2rem;
  color: #676767;
  border: none;

  & {
    outline: none;
  }
`;

export default UploadMain;
