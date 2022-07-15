import React, { useState } from "react";
import styled from "styled-components";
import ColorBall from "../Atoms/ColorBall";
import ImgAreaLeftTitle from "../Atoms/ImgAreaLeftTitle";
import ImgAreaRight from "./ImgAreaRight";

function UploadImgArea(props) {
  const [color, setColor] = useState("#FF50E2");

  const getColor = (text) => {
    setColor(text);
  };

  return (
    <Wrap>
      <ImgAreaRight src={props.src} color={color} />
      <Wrap2>
        <ImgAreaLeftTitle text="테두리 설정" />
        <Color>
          {props.frame.map((arr, i) => {
            return (
              <Wrap3 key={i}>
                <ColorBall color={props.color} back={arr} getColor={getColor} />
              </Wrap3>
            );
          })}
        </Color>
        <ImgAreaLeftTitle text="배경 설정" type="bottom" />
        <Color>
          {props.back.map((arr, i) => {
            return (
              <Wrap3 key={i}>
                <ColorBall color={props.color} back={arr} />
              </Wrap3>
            );
          })}
        </Color>
      </Wrap2>
      <ImgButton>파일찾기</ImgButton>
    </Wrap>
  );
}

const Wrap3 = styled.div`
  display: inline-block;
`;

const Color = styled.div`
  width: 100%;
  height: 110px;
  display: block;
  position: relative;
`;

const Wrap2 = styled.div`
  width: 25%;
  height: 100%;
  border: 1px solid gray;
  border-top: none;
  border-left: none;
  display: block;
  position: relative;
`;

const Wrap = styled.div`
  width: 95%;
  margin: 20px auto 0 auto;
  height: 400px;
  display: flex;
  justify-content: space-between;
`;

const ImgButton = styled.div`
  width: 11.9rem;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: pink;
  position: absolute;
  left: 59.4%;
  top: 47%;
  border-radius: 10px;
  background-color: #ff50e2;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default UploadImgArea;
