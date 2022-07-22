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
  margin-left: 330px
`;

const Text = styled.div`
  color: #ff50e2;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 13pt;
`;

const SubText = styled.div`
  color: #999999;
  display: inline-block;
  font-size: 13px;
  line-height: 13pt;
  margin-left: 10px;
  
`;

export default FooterPostText;
