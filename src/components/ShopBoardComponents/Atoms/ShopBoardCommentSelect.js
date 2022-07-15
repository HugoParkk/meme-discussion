import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function ShopBoardCommentSelect() {
  return (
    <>
      <GlobalStyle />
      <SelectTime size={1}>
        <option value={"Post+Comment"}>게시글 + 댓글</option>
        <option value={"Post"}>게시글</option>
        <option value={"Comment"}>댓글</option>
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
  margin-left: 39rem;
  margin-right: -9.6rem;
  position: absolute;
  margin-top: 2rem;
`;

export default ShopBoardCommentSelect;
