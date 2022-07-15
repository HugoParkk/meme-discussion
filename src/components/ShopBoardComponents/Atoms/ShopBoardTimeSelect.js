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
  font-size: 13pt;
  display: inline-block;
  padding-left: 10px;
  width: 200px;
  border: 2px solid #dbdbdb;
  height: 50px;
  margin-left: 26rem;
  margin-right: -9.6rem;
  position: absolute;
  margin-top: 2rem;
`;

export default ShopBoardTimeSelect;
