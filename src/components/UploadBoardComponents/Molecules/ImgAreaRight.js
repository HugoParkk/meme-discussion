import React from "react";
import styled from "styled-components";
import MainImg from "../Atoms/MainImg";

function ImgAreaRight(props) {
  return (
    <Wrap route={props.url}>
      <MainImg src={props.src} color={props.color} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 80%;
  height: 100%;
  border-bottom: 1px solid #cbcbcb;
  border-right: 1px solid #cbcbcb;
  display: block;
  margin-left: -10px;
  background: url(${(props) => props.route});
  background-size: cover;
  box-shadow: 7px 7px 7px -7px inset #999999;
`;

export default ImgAreaRight;
