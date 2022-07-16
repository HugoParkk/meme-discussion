import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import svg from "../../../images/Vector.svg";
function SideBarSnsUploadText(props) {
  return (
    <>
      <GlobalStyle />
      <Imga src={svg} alt="a"></Imga>
      <Divs>{props.text}에 업로드</Divs>
      <br />
    </>
  );
}
const Divs = styled.div`
  font-size: 0.6667vw;
  margin-top: 0.3646vw;
  display: inline-block;
`;
const Imga = styled.img`
  margin-left: 1.0417vw;
  margin-right: 0.5208vw;
  width: 0.7813vw;
`;

export default SideBarSnsUploadText;
