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
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: white;
  box-shadow: .5px .5px .5px .5px #e2e2e2 inset;
  height: 40px;
  width: 150px;
  font-weight: bold;
`;
const PinkBtn = styled.button`
  margin-top: 8px;
  font-size: 0.9rem;
  border: 2px solid #ff50e2;
  border-radius: 5px;
  background-color: #ff50e2;
  color: white;
  height: 40px;
  width: 150px;
  font-weight: bold;
`;
export default RightSideBarBtn;
