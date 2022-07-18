import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function ShopBoardTimeSelect() {
  // return (
  //   <Wrap>
  //     <GlobalStyle />
  //     <SelectTime size={1}>
  //       <option value={"allTime"}>전체기간</option>
  //       <option value={"to1h"}>지난 1시간</option>
  //       <option value={"toDay"}>오늘</option>
  //       <option value={"toWeek"}>이번 주</option>
  //       <option value={"toMonth"}>이번 달</option>
  //       <option value={"toYear"}>올해</option>
  //     </SelectTime>
  //     <SelectComment size={1}>
  //       <option value={"Post+Comment"}>게시글 + 댓글</option>
  //       <option value={"Post"}>게시글</option>
  //       <option value={"Comment"}>댓글</option>
  //     </SelectComment>
  //     <Text type={"text"} placeholder={"검색어를 입력해주세요"}></Text>
  //     <Btn>검색</Btn>

  //   </Wrap>
  // );
}

const Wrap = styled.div`
  display: flex;
`

const SelectTime = styled.select`
  font-size: 0.8vw;
  font-weight: bold;
  padding-left: 0.521vw;
  width: 8vw;
  border: 0.104vw solid #dbdbdb;
  height: 2.23vw;
  /* margin-top: 1.667vw; */
`;

const SelectComment = styled.select`
  font-size: 0.8vw;
  font-weight: bold;
  height: 2.23vw;
  padding-left: 0.521vw;
  width: 8vw;
  border: 0.104vw solid #dbdbdb;
`

const Text = styled.input`
  font-size: 0.8vw;
  color: #C0C0C0;
  width: 15.625vw;
  font-weight: bold;
  height: 1.95vw;
  padding-left: 1vw;
  padding-top: 0.06vw;
  border: 0.1vw solid #dbdbdb;
`;

const Btn = styled.button`
  background: magenta;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-weight: bold;
  height: 2.3vw;
  width: 5.208vw;
`;

export default ShopBoardTimeSelect;
