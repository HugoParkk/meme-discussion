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
  font-size: 13pt;
  margin-top: 7px;
  display: inline-block;
`;
const Imga = styled.img`
  margin-right: 7px;
  width: 15px;
`;
export default SideBarSnsUploadText;
