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
  font-size: 0.903vw;
  display: inline-block;
  padding-left: 0.521vw;
  width: 7.813vw;
  height: 2.604vw;
  border: 2px solid #dbdbdb;
  left: 25vw;
  margin-right: -8vw;
  position: absolute;
  margin-top: 1.667vw;
`;

export default ShopBoardCommentSelect;
