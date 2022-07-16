import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function FooterPostText(props) {
  return (
    <Wrap>
      <GlobalStyle />
      <Text>{props.text}</Text>
      {props.subText != null ? <SubText>{props.subText}</SubText> : <></>}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: inline-block;
  justify-content: space-between;
  width: 75%;
  transform: translateX(-50%);
  left: 47%;
  position: relative;
`;

const Text = styled.div`

  color: #ff50e2;
  display: inline-block;
  font-size: 1vw;
  font-weight: bold;
  margin: auto 0;
  /* line-height: 5%; */
`;

const SubText = styled.div`
  color: gray;
  margin: auto 0;
  display: inline-block;
  font-size: 0.75vw;
  /* line-height: 5%; */
  margin-left: 0.5208vw;
`;

export default FooterPostText;
