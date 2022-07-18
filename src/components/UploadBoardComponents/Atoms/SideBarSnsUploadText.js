import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import svg from "../../../images/Vector.svg";
function SideBarSnsUploadText(props) {
  return (
    <>
      <GlobalStyle />
      <Flex>
        <img src={svg} alt="a"></img>
        <div id="text">{props.text}에 업로드</div>
      </Flex>
    </>
  );
}
const Flex = styled.div`
  
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 5px 0;
  padding: 0;
  img{
    margin: 4px;
  }
  div{
    margin: 0 2px;
    padding: 0;
  }
`
const Divs = styled.div`
  font-size: 0.8rem;
  margin-top: 7px;
  display: inline-block;

`;
const Imga = styled.img`
  margin-left: 20px;
  margin-right: 10px;
  width: 15px;
  /* margin-top: 10px; */
`;

export default SideBarSnsUploadText;
