import React from "react";
import styled from "styled-components";
import ImgAreaLeftTitle from "../Atoms/ImgAreaLeftTitle";
import LeftColorArea from "./LeftColorArea";

function ImgAreaLeft(props) {
  return (
    <Wrap>
      <ImgAreaLeftTitle text="테두리 설정" />
      <LeftColorArea data={props.frame} />
      <ImgAreaLeftTitle text="배경 설정" type="bottom" />
      <LeftColorArea data={props.back} color={props.color} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 25%;
  height: 100%;
  border: 1px solid gray;
  border-top: none;
  border-left: none;
  display: block;
  position: relative;
`;

export default ImgAreaLeft;
