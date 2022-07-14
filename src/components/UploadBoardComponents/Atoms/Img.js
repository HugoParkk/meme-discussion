import React from "react";
import styled from "styled-components";

function Img(props) {
  return <Image src={props.src} />;
}

const Image = styled.img`
  width: 160px;
  height: 160px;
  position: relative;
  top: 48%;
  transform: translateY(-50%);
  margin-left: 7px;
  box-shadow: 0 4px 4px -4px black;
  &:last-child {
    margin-right: 7px;
  }
`;

export default Img;
