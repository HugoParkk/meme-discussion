import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function ShopBoardTimeSelect() {
  return (
    <>
      <GlobalStyle />
      <SelectTime size={1}>
        <option value={"allTime"}>전체기간</option>
        <option value={"to1h"}>지난 1시간</option>
        <option value={"toDay"}>오늘</option>
        <option value={"toWeek"}>이번 주</option>
        <option value={"toMonth"}>이번 달</option>
        <option value={"toYear"}>올해</option>
      </SelectTime>
    </>
  );
}

const SelectTime = styled.select`
  font-size: 0.903vw;
  display: inline-block;
  padding-left: 0.521vw;
  width: 6.771vw;
  border: 0.104vw solid #dbdbdb;
  height: 2.604vw;
  left: 17.847vw;
  margin-right: -8vw;
  position: absolute;
  margin-top: 1.667vw;
`;

export default ShopBoardTimeSelect;
