import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightSideBarBtn(props) {
  return (
    <>
      <GlobalStyle />
      {props.type === "pink" ? (
        <PinkBtn href={props.url}>{props.text}</PinkBtn>
      ) : (
        <Btn>{props.text}</Btn>
      )}
    </>
  );
}
const Btn = styled.button`
  margin-top: 2.6042vw;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  font-size: 0.75vw;
  background-color: white;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #e2e2e2 inset;
  width: 7.8125vw;
  height: 1.5625vw;
  cursor: pointer;
  font-weight: bold;
`;
const PinkBtn = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: 7.8125vw;
  text-align: center;
  margin-top: 0.4167vw;
  font-size: 0.75vw;
  border: 2px solid #ff50e2;
  border-radius: 5px;
  background-color: #ff50e2;
  color: white;
  height: 1.5625vw;
  font-weight: bold;
`;
export default RightSideBarBtn;
