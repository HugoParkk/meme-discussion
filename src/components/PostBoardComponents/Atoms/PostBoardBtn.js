import React from "react";
import styled from "styled-components";

function PostBoardBtn(props) {
  return (
    <>
      {props.type === "white" ? (
        <WhiteDiv>{props.text}</WhiteDiv>
      ) : (
        <PinkDiv>{props.text}</PinkDiv>
      )}
    </>
  );
}
const WhiteDiv = styled.div`
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: white;
  border: 1px solid #cfcfcf;
  display: inline-block;
  margin-right: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const PinkDiv = styled.div`
  cursor: pointer;
  width: 180px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #ff50e2;
  display: inline-block;
  color: white;
  border-radius: 5px;
`;
export default PostBoardBtn;
