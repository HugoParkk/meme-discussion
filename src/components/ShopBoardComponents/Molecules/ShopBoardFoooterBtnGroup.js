import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import ShopBoardFooterBtn from "../Atoms/ShopBoardFooterBtn";
function ShopBoardFoooterBtnGroup(props) {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        {props.data.map((arr, i) => {
          return <ShopBoardFooterBtn text={arr.text} key={i} />;
        })}
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  text-align: center;
  display: inline-block;
`;

export default ShopBoardFoooterBtnGroup;
