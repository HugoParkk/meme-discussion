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
  font-size: 1rem;
  font-weight: bold;
  color: #ff50e2;
  position: relative;
  margin: 0 auto;
  text-align: left;
  margin-top: -1.5rem;
  margin-bottom: 1.3rem;
  left: 4rem;
`;
export default GradeTitle;
