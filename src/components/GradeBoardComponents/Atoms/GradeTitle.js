import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function GradeTitle() {
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
  width: 70%;
  margin: 0 auto;
  text-align: left;
  margin-top: 3rem;
  margin-bottom: 1.3rem;
`;
export default GradeTitle;
