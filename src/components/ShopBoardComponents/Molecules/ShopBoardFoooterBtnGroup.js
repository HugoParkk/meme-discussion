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
              {arr}
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
  position: relative;
  top: 30px;
  left: -45rem;
`;

const Btn = styled.button`
  cursor: pointer;
  z-index: 2;
  background-color: #f9f9f8;
  width: 2rem;
  height: 2rem;
  color: black;
  border: #dbdbdb;
  font-weight: bold;
  ${(props) =>
    props.active &&
    `
    color: magenta;
    background-color:white ;
    border : 2px solid #999999
  
  `}
`;

export default ShopBoardFoooterBtnGroup;
