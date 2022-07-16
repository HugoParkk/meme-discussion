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
      <Wrap>
        <GlobalStyle />
        <SelectTime size={1}>
          <option value={"allTime"}>전체기간</option>
          <option value={"to1h"}>지난 1시간</option>
          <option value={"toDay"}>오늘</option>
          <option value={"toWeek"}>이번 주</option>
          <option value={"toMonth"}>이번 달</option>
          <option value={"toYear"}>올해</option>
        </SelectTime>
        <SelectComment size={1}>
          <option value={"Post+Comment"}>게시글 + 댓글</option>
          <option value={"Post"}>게시글</option>
          <option value={"Comment"}>댓글</option>
        </SelectComment>
        <InputText><input type={"text"} placeholder={"검색어를 입력해주세요"}></input>
        <SearchBtn>검색</SearchBtn>
        </InputText>

    </Wrap>
    </>
  );
}
const StyledDiv = styled.div`
  text-align: center;
  display: inline-block;
  position: relative;
  top: 6.25vw;
  left: 0.694vw;
`;

const Btn = styled.button`
  cursor: pointer;
  z-index: 2;
  background-color: #f9f9f8;
  width: 2.5vw;
  height: 2.5vw;
  color: black;
  border: #dbdbdb;
  font-weight: bold;
  ${(props) =>
    props.active &&
    `
    color: magenta;
    background-color:white ;
    border : 0.104vw solid #999999
  
  `}
`;







const Wrap = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  margin: 20px 45px;
`

const SelectTime = styled.select`
  font-size: 0.8vw;
  font-weight: bold;
  padding-left: 0.521vw;
  width: 8vw;
  border: 0.104vw solid #dbdbdb;
  height: 2.23vw;
  margin: 0 5px 0 0;
`;

const SelectComment = styled.select`
  font-size: 0.8vw;
  font-weight: bold;
  height: 2.23vw;
  padding-left: 0.521vw;
  width: 8vw;
  border: 0.104vw solid #dbdbdb;
  display: flex;
  margin: 0 5px 0 0;
`

const InputText = styled.div`
  input {
    position: absolute;
    font-size: 0.8vw;
    color: #C0C0C0;
    width: 15.25vw;
    font-weight: bold;
    height: 2vw;
    padding-left: 1vw;
    border: 0.1vw solid #dbdbdb;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  background: magenta;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-weight: bold;
  height: 2.3vw;
  width: 5.208vw;
  margin: 0 0 0 16vw;
`;

export default ShopBoardFoooterBtnGroup;
