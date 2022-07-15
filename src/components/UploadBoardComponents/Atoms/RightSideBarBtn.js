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
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  background-color: white;
  height: 30px;
  font-weight: bold;
`;
const PinkBtn = styled.button`
  margin-top: 8px;

  border: 2px solid #ff50e2;
  border-radius: 5px;
  background-color: #ff50e2;
  color: white;
  height: 30px;
  font-weight: bold;
`;
export default RightSideBarBtn;
