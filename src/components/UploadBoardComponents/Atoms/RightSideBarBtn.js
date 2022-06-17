import React from "react";
import styled from "styled-components";
function RightSideBarBtn(props) {
  return (
    <>
      {props.type === "pink" ? (
        <PinkBtn>{props.text}</PinkBtn>
      ) : (
        <Btn>{props.text}</Btn>
      )}
    </>
  );
}
const Btn = styled.button`
  border: 2px solid #dbdbdb;
  background-color: white;
`;
const PinkBtn = styled.button`
  border: 2px solid #ff50e2;
  background-color: #ff50e2;
`;
export default RightSideBarBtn;
