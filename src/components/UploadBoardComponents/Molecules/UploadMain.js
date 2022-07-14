import React from "react";
import styled from "styled-components";
import FooterPostText from "../Atoms/FooterPostText";
import UploadImgArea from "./UploadImgArea";

function UploadMain(props) {
  return (
    <Main>
      <FooterPostText text="짤 업로드" />
      <UploadImgArea frame={props.frame} back={props.back} src={props.src} />
    </Main>
  );
}

const Main = styled.div`
  display: block;
  width: 60.8%;
  position: relative;
  left: 10%;
  border: 5px solid rgba(0, 0, 0, 0);
  outline: 3px solid black;
  top: 50px;
  padding: 10px;
  font-size: 14pt;
`;

export default UploadMain;
