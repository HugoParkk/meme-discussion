import React from "react";
import styled from "styled-components";
import PostBoardIMainImg from "../Atoms/PostBoardIMainImg";

function PostBoardChangeImg(props) {
  return (
    <DivImage>
      <PostBoardIMainImg />
      <Title>{props.text}</Title>
      <Image src={props.img} />
      <Description>{props.desc}</Description>
    </DivImage>
  );
}
const DivImage = styled.div`
  width: 350px;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
`;
const Title = styled.div`
  font-size: 13pt;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  z-index: 3;
  width: 67.3%;
  height: 41px;
  line-height: 39px;
  background-color: pink;
  top: 54px;
  text-align: center;
  font-weight: bold;
`;
const Description = styled.div`
  font-weight: bold;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  z-index: 3;
  background-color: white;
  width: 70.5%;
  top: 89px;
  height: 77px;
  text-align: center;
  line-height: 77px;
`;
const Image = styled.img`
  position: relative;
  transform: translateX(-50%);
  width: 65%;
  top: 73px;
  height: 228px;
  left: 50%;
  z-index: 3;
`;
export default PostBoardChangeImg;
