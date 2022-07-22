import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function PostTitle() {
  return (
    <>
      <GlobalStyle />
      <PinkDiv>카페의 회원 등급</PinkDiv>
    </>
  );
}
const PinkDiv = styled.div`
  font-size: 13pt;
  font-weight: bold;
  color: #ff50e2;
  width: 95%;
  text-align: left;
  margin: 0 auto;
`;
export default PostTitle;
