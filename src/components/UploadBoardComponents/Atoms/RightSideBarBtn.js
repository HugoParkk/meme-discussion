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
  margin-top: 50px;
  color: #000;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  font-size: 12px;
  background-color: white;
  height: 34px;
  width: 168px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: -0.7px;

`;
const PinkBtn = styled.button`
  margin-top: 6px;
  font-size: 12px;
  border: 2px solid #ff50e2;
  border-radius: 5px;
  background-color: #ff50e2;
  color: white;
  height: 34px;
  width: 168px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: -0.7px;
`;
export default RightSideBarBtn;
