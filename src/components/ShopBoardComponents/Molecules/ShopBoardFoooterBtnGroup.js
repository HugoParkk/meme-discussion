import React, { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function ShopBoardFoooterBtnGroup(props) {
  const [active, setActive] = useState(0);
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        {props.data.map((arr, i) => {
          return (
            <Btn key={i} active={active === i} onClick={() => setActive(i)}>
              {arr.text}
            </Btn>
          );
        })}
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  text-align: center;
  display: inline-block;
`;

const Btn = styled.button`
  cursor: pointer;
  z-index: 2;
  background-color: #dbdbdb;
  width: 2rem;
  height: 2rem;
  color: black;
  border: #dbdbdb;
  ${({ active }) =>
    active &&
    `
    color: #ff50e2;
    background-color: white;
    border : 2px solid #999999
  `}
`;

export default ShopBoardFoooterBtnGroup;
