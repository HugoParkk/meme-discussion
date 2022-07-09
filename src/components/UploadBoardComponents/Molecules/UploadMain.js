import React from "react";
import styled from "styled-components";
import FooterPostText from "./FooterPostText";
import Line from "../Atoms/Line";
import UploadImgArea from "./UploadImgArea";
import ImgAndList from "./ImgAndList";
import GlobalStyle from "../GlobalStyle";

function UploadMain(props) {
  return (
    <Main>
      <GlobalStyle />
      <FooterPostText text="짤 업로드" />
      <UploadImgArea frame={props.frame} back={props.back} />
      <Line />
      <FooterPostText
        text="짤 설명 사진"
        subText="게시하려는 짤과 비슷하거나 짤의 비하인드를 이해할 수 있는 짤을 첨부해 주세요."
      />
      <ImgAndList data={props.data} text={props.text} />
      <FooterPostTextTag>#태그를 입력해 주세요 (최대 10개)</FooterPostTextTag>
    </Main>
  );
}

const Main = styled.div`
  display: block;
  width: 60.8%;
  height: 52rem;
  position: relative;
  left: 10%;
  border: 5px solid rgba(0, 0, 0, 0);
  outline: 3px solid black;
  top: 50px;
  padding: 10px;
  font-size: 14pt;
`;

const FooterPostTextTag = styled.div`
  font-size: 17px;
  position: relative;
  display: block;
  left: 4%;
  top: 10px;
  width: 20rem;
  height: 2em;
  line-height: 2rem;
  color: #676767;
`;

export default UploadMain;
