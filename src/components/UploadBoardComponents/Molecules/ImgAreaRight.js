import React from "react";
import styled from "styled-components";
import MainImg from "../Atoms/MainImg";

function ImgAreaRight(props) {
  return (
    <Wrap>
      <MainImg src={props.src} color={props.color} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #CBCBCB;
  border-right: 1px solid #CBCBCB;
  display: block;
  margin-left: -10px;
  box-shadow: 7px 7px 7px -7px inset #999999;
  
`;

export default ImgAreaRight;
