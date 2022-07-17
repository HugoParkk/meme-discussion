import React, { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import Popup from "../../Popup";

import arrow from "../../../images/arrow.png"

function ShopBoardFoooterBtnGroup(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);

  const [active, setActive] = useState(0);
  return (
    <>
      {popup && <Popup onClose={handlerPopup} />}
      <All>
        <div id="assemble">
          <StyledDiv>
            {props.data.map((arr, i) => {
              return (
                <Btn key={i} active={active === i} onClick={() => setActive(i)}>
                  {arr}
                </Btn>
              );
            })}
          </StyledDiv>
          <div id="next" onClick={() => { handlerPopup(true); }}><span class="stick">|</span><span class="text">다음</span><img src={arrow}></img></div>
        </div>
        <div id="line"></div>
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
          <InputText>
            <input type={"text"} placeholder={"검색어를 입력해주세요"}></input>
            <SearchBtn>검색</SearchBtn>
          </InputText>
        </Wrap>
      </All>
    </>
  );
}

const All = styled.div`
  background: #F9F9F8;
  width: 100%;
  height: 157px;
  margin-top: 40px;
  #line{
    width: 830px;
    margin: auto;
    border-bottom:1px solid #EBEBEA;
  }
  #assemble{
    display: flex;
    align-items: center;
    width: 570px;
    height: 65px;
    margin: auto;
    #next{
      width: 70px;
      height: 15px;
      font-size: 12px;
      display: flex;
      align-items: center;
      .stick{color: #EBEBEA; margin: 0 20px 0 0;}
      .text{color: #000; margin: 0 5px 0 0; font-weight: 600;}
      cursor: pointer;
    }
  }
`

const Wrap = styled.div`
  display: flex;
  margin: 0 0 0 150px;
  padding: 25px 0 0 0;
`

const SelectTime = styled.select`
  font-size: 12px;
  font-weight: bold;
  padding-left: 0.521vw;
  width: 150px;
  border: 1px solid #E2E2E2;
  height: 35px;
  margin: 0 5px 0 0;
`;

const SelectComment = styled.select`
  font-size: 12px;
  font-weight: bold;
  height: 35px;
  padding-left: 0.521vw;
  width: 150px;
  border: 1px solid #E2E2E2;
  display: flex;
  margin: 0 5px 0 0;
`

const InputText = styled.div`
  input {
    position: absolute;
    font-size: 12px;
    color: #C0C0C0;
    width: 200px;
    font-weight: bold;
    height: 31px;
    padding-left: 10px;
    border: 1px solid #E2E2E2;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  background: magenta;
  border: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  height: 35px;
  width: 55px;
  margin: 0 0 0 180px;
`;

const StyledDiv = styled.span`
  
`;

const Btn = styled.button`
  cursor: pointer;
  background-color: #F9F9F8;
  width: 25px;
  height: 25px;
  margin: 0 20px 0 0;
  color: black;
  border: 0;
  font-weight: bold;
  font-size: 12px;
  ${(props) =>
    props.active &&
    `
    color: #FF50E2;
    background-color:white ;
    border : 1px solid #E2E2E2;
  
  `}
`;




export default ShopBoardFoooterBtnGroup;
