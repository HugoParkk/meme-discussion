import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import SvgImage from "../../../images/Group 197.svg";
function BoardBuyChat() {
  return (
    <>
      <GlobalStyle />
      <ChatBtn>
        <ImgChat src={SvgImage} alt={"구매 문의 채팅 이미지"} />
      </ChatBtn>
    </>
  );
}
const ChatBtn = styled.button`
  border-radius: 7px;
  position: relative;
  margin-left: 49.5%;
  margin-top: -4rem;
  margin-bottom: 2rem;
  width: 38%;
  border: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
`;
const ImgChat = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 0;
`;

export default BoardBuyChat;
