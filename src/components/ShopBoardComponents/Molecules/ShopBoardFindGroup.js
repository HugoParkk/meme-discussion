import React from "react";
import styled from "styled-components";
import ShopBoardFindBtn from "../Atoms/ShopBoardFindBtn";
import ShopBoardFindPost from "../Atoms/ShopBoardFindPost";
function ShopBoardFindGroup() {
  return (
    <>
      <Wrapper>
        <ShopBoardFindPost />
        <ShopBoardFindBtn />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  left: 270pt;
  margin-top: 24pt;
`;

export default ShopBoardFindGroup;
