import React from "react";
import styled from "styled-components";
import svg from "../../../images/Group 306.svg";
function PostBoardIMainImg() {
  return <Image src={svg}></Image>;
}
const Image = styled.img`
  width: 100%;
  position: absolute;
`;
export default PostBoardIMainImg;
