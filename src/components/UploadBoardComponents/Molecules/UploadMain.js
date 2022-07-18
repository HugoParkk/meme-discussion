import React, { useState } from "react";
import styled from "styled-components";
import FooterPostText from "./FooterPostText";
import Line from "../Atoms/Line";
import UploadImgArea from "./UploadImgArea_copy";
import ImgAndList from "./ImgAndList";
import GlobalStyle from "../GlobalStyle";

function UploadMain(props) {
  const [src, setSrc] = useState(props.src);

  const srcFunction = (e) => {
    setSrc(e);
    props.propFunction(e);
  };

  return (
    <Wrap>
      <Main>
        <GlobalStyle />
        <FooterPostText text="짤 업로드" />
        <UploadImgArea srcFunction={srcFunction} frame={props.frame} back={props.back} src={props.src} />
        <Line />
        <FooterPostText
          text="짤 설명 사진"
          subText="게시하려는 짤과 비슷하거나 짤의 비하인드를 이해할 수 있는 짤을 첨부해 주세요"
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
  width: 1072px;
  position: relative;
  margin-top: 20px;

`;

const Main = styled.div`
  background-color: white;
  display: block;
  width: 875px;
  border: 4px solid rgba(0, 0, 0, 0);
  outline: 2px solid black;
  padding: 10px; 
  font-size: 12px;
  letter-spacing: -0.5px;
  color: #000;
`;

const FooterPostTextTag = styled.input`
  font-size: 14px;
  display: block;
  width: 95%;
  padding: 28px;
  line-height: 2rem;
  letter-spacing: -0.7px;
  color: #cfcfcf;
  border: none;

  & {
    outline: none;
  }
`;

export default UploadMain;
