import React from "react";
import styled from "styled-components";

function HeaderImg(props) {
  return (
    <>
      {props.type === "bigger" ? (
        <StyledImgB src={props.src} />
      ) : (
        <StyledImg src={props.src} alt="" />
      )}
    </>
  );
}

const StyledImg = styled.img`
  display: inline-block;
  width: 2.2917vw;
  height: 2.2917vw;
  margin-left: 0.5208vw;
`;

const StyledImgB = styled.img`
  display: inline-block;
  width: 2.2917vw;
  height: 2.2917vw;
  margin-right: 0.5208vw;
`;

export default HeaderImg;
