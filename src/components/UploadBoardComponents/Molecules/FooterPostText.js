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
  left: 40%;
  position: relative;
`;

const Text = styled.div`

  color: #ff50e2;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 13pt;
`;

const SubText = styled.div`
  color: gray;
  display: inline-block;
  font-size: 0.9rem;
  line-height: 13pt;
  margin-left: 10px;
`;

export default FooterPostText;
