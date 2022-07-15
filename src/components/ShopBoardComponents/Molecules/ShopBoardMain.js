import React from "react";
import styled from "styled-components";
import ShopBoarddSubTitle from "../Atoms/ShopBoarddSubTitle";
import ShopBoardImg from "../Atoms/ShopBoardImg";
import ShopBoardTitle from "../Atoms/ShopBoardTitle";

function ShopBoardMain(props) {
  const arr = props.data;

  return (
    <Contents>
      {console.log(arr)}
      {
        arr.order === 0 ?
        <a href="http://localhost:3000/productdetail">
          <ShopBoardImg src={arr.src} />
          <ShopBoardTitle type={arr.type1} text={arr.text1} />
          <ShopBoardTitle type={arr.type2} text={arr.text2} />
          <ShopBoarddSubTitle text={arr.sub1} />
          <StyledDiv>
            <ShopBoarddSubTitle text={arr.sub2} />
            <ShopBoarddSubTitle text={arr.sub3} />
          </StyledDiv>
        </a> :
        <a href="http://localhost:3000/Permission">
          <ShopBoardImg src={arr.src} />
          <ShopBoardTitle type={arr.type1} text={arr.text1} />
          <ShopBoardTitle type={arr.type2} text={arr.text2} />
          <ShopBoarddSubTitle text={arr.sub1} />
          <StyledDiv>
            <ShopBoarddSubTitle text={arr.sub2} />
            <ShopBoarddSubTitle text={arr.sub3} />
          </StyledDiv>
        </a>
      }
    </Contents>

  );
}

const Contents = styled.div`
  width: 120pt;
  display: inline-block;
  margin: 10px;
  margin-left: 20pt;
  margin-right: 20pt;
  a {
    text-decoration: none;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ShopBoardMain;
