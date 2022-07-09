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
  width: 44px;
  height: 44px;
  margin-left: 10px;
`;

const StyledImgB = styled.img`
  display: inline-block;
  width: 44px;
  height: 44px;
  margin-right: 10px;
`;

export default HeaderImg;
