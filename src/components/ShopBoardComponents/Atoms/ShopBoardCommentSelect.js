import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function ShopBoardCommentSelect() {
  // return (
  //   <>
  //     <GlobalStyle />
  //     <SelectTime size={1}>
  //       <option value={"Post+Comment"}>게시글 + 댓글</option>
  //       <option value={"Post"}>게시글</option>
  //       <option value={"Comment"}>댓글</option>
  //     </SelectTime>
  //   </>
  // );
}
const SelectTime = styled.select`
  font-size: 0.8vw;
  font-weight: bold;
  height: 2.23vw;
  display: inline-block;
  padding-left: 0.521vw;
  width: 8vw;
  border: 0.104vw solid #dbdbdb;
  left: 26.1vw;
  margin-right: -8vw;
  position: absolute;
  margin-top: 1.667vw;
  display: flex;
`;

export default ShopBoardCommentSelect;
