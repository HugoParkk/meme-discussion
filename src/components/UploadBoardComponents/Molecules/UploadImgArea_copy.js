import React, { useState } from "react";
import styled from "styled-components";
import ColorBall from "../Atoms/ColorBall";
import ImgAreaLeftTitle from "../Atoms/ImgAreaLeftTitle";
import ImgAreaRight from "./ImgAreaRight";
import file_icon from '../../../images/file_plusIcon.png';

function UploadImgArea(props) {
  const [src, setSrc] = useState(props.src);
  const [color, setColor] = useState("#FF50E2");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setSrc(reader.result);
        props.srcFunction(src);
        resolve();
      };
    });
  };

  const getColor = (text) => {
    setColor(text);
  };

  const clickImgInput = () => {
    let imgInput = document.getElementById("img_input");
    imgInput.click();
  };

  return (
    <Wrap>
      <ImgAreaRight src={src} color={color} />
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
      <ImgButton onClick={() => { clickImgInput() }}>
        <ImgInput id="img_input" type={"file"} onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }} />
        <img src={file_icon} id="found_file" />
        <div id="text">파일찾기</div>
      </ImgButton>
    </Wrap>
  );
}

const ImgInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`

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
  /* margin-left: -50px; */
  width: 26.1%;
  height: 100%;
  border: 1px solid #CBCBCB;
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
  width: 186px;
  height: 37px;
  justify-content: center;
  line-height: 3;
  background-color: pink;
  position: absolute;
  left: 60.2%;
  top: 46.2%;
  border-radius: 6px;
  background-color: #ff50e2;
  color: white;
  display: flex;
  /* font-weight: bold; */
  font-size: 12px;
  cursor: pointer;
  #found_file{
    margin-top: 12px;
    width: 13px;
    height: 15px;
  }
  #text{
    margin-left: 5px;
  }
`;

export default UploadImgArea;
