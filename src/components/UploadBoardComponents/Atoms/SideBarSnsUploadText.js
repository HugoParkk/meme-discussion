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
  font-size: 10pt;
  margin-top: 7px;

  display: inline-block;
`;
const Imga = styled.img`
  margin-left: 20px;
  margin-right: 10px;
  width: 15px;
`;

export default SideBarSnsUploadText;
