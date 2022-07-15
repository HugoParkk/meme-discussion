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
  font-size: 1.1889vw;
  font-weight: bold;
  color: #ff50e2;
  position: relative;
  margin: 0 auto;
  text-align: left;
  margin-top: -2%;
  margin-bottom: 5%;
  left: 4rem;
`;
export default GradeTitle;
