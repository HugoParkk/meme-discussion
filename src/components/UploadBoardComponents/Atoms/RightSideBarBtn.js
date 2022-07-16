import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function RightSideBarBtn(props) {
  return (
    <>
      <GlobalStyle />
      {props.type === "pink" ? (
        <PinkBtn>{props.text}</PinkBtn>
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
  height: 40px;
  width: 150px;
  height: 1.5625vw;
  font-weight: bold;
`;
const PinkBtn = styled.button`
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
