import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Popup from "../../Popup";

function BoardEmail(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);
  return (
    <>
    {popup && <Popup onClose={handlerPopup} />}
      <GlobalStyle />
      <Email><span>거래자</span>che******@donga.com | NFT 인증 이용중 <b onClick={() => { handlerPopup(true); }}>코드보기 &#62;</b></Email>
    </>
  );
}
const Email = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 350px;
  b{
    cursor: pointer;
  }
`;

export default BoardEmail;
