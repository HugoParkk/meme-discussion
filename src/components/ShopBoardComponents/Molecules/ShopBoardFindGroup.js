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
  margin-left: 420pt;
  margin-top: 23pt;
`;

export default ShopBoardFindGroup;
