import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardBottomDescribe() {
  return (
    <>
      <GlobalStyle />
      <Text>
        {
          "카페 구매문의 채팅이나 전화 등을 이용해 연락하고 외부 메신저 이용 및 개인 정보 유출에 주의 "
        }
        <br />
        {
          "하세요.계좌이체 시 선입금을 유도할 경우 안전한 거래인지 다시 한번확인하세요."
        }
        <br />
        {
          "불확실한 판매자(본인 미인증,해외IP,사기의심 전화번호)의 물건은 구매하지 말아주세요."
        }
        <br />
        <br />
      </Text>
      <Text>
        {
          "밈품명품에 등록된 판매 물품과 내용은 개별 판매자 개인이 등록한 것으로서,밈품명품은 등록을"
        }
        <br />
        {"위한 시스템만 제공하며 내용에 대하여 일체의 책임을 지지 않습니다."}
      </Text>
    </>
  );
}
const Text = styled.div`
  font-size: 12pt;
  font-weight: bold;
  line-height: 20px;
  color: #dbdbdb;
  position: relative;
  margin-left: 50%;
`;
export default BoardBottomDescribe;
