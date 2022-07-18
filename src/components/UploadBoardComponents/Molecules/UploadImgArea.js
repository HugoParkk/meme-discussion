import React, { useState } from "react";
import styled from "styled-components";
import ImgAreaLeft from "./ImgAreaLeft";
import ImgAreaRight from "./ImgAreaRight";

function UploadImgArea(props) {
  const [color, setColor] = useState("#FF50E2");

  const good = (color) => {
    setColor(color); //hooks에 값넣음
  };

  const UploadImgArea = () => {
    <ImgAreaLeft frame={props.frame} back={props.back} color={good} />;
  };

  return (
    <Wrap>
      <ImgAreaRight src={props.src} color={color} />
      <ImgAreaLeft frame={props.frame} back={props.back} color={good} />
      <ImgButton>파일찾기</ImgButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 95%;
  margin: 20px auto 0 auto;
  height: 400px;
  display: flex;
  justify-content: space-between;
`;

const ImgButton = styled.div`
  width: 250px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: pink;
  position: absolute;
  left: 74%;
  top: 47%;
  border-radius: 10px;
  background-color: #ff50e2;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default UploadImgArea;
