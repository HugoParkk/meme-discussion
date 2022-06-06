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
  height: 50px;
  border: 2px solid #dbdbdb;
  margin-left: 10px;
`;

export default ShopBoardCommentSelect;
