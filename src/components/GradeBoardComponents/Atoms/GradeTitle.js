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
  font-size: 13px;
  font-weight: bold;
  color: #ff50e2;
  margin: 0 auto;
  margin-top: -13px;
  margin-bottom: 10px;
  margin-left: 57px;
  letter-spacing: -0.5px;
`;
export default GradeTitle;
