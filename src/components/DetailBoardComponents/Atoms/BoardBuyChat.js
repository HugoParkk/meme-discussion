import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import SvgImage from "../../../images/Group 197.svg";
function BoardBuyChat() {
  return (
    <>
      <GlobalStyle />
      <a href="http://localhost:3000/Permission"><ChatBtn>
        <ImgChat src={SvgImage} alt={"구매 문의 채팅 이미지"} />
      </ChatBtn></a>
    </>
  );
}
const ChatBtn = styled.div`
  border-radius: 7px;
  margin-bottom: 20;
  width: 350px;
  border: 0;
`;
const ImgChat = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export default BoardBuyChat;
