import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Popup from "../../Popup";
function BoardTopTitle(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);
  return (
    <>
    {popup && <Popup onClose={handlerPopup} />}
      <GlobalStyle />
      {props.type === "pink" ? (
        <Text onClick={() => { handlerPopup(true); }}>{props.text}</Text>
      ) : (
        <TextBlack onClick={() => { handlerPopup(true); }}>{props.text}</TextBlack>
      )}
    </>
  );
}

const Text = styled.div`
  font-size: 10pt;
  display: block;
  color: #ff50e2;
  width: 90%;
  margin: 0 auto;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 7px;
  cursor: pointer;
  /* 방송캡쳐 */
`;

const TextBlack = styled.div`
  font-size: 10pt;
  font-weight: bold;
  display: block;
  color: black;
  width: 10%;
  margin: 0 auto;
  position: relative;
  left: 230pt;
  top: -105pt;
  cursor: pointer;
`;

export default BoardTopTitle;
