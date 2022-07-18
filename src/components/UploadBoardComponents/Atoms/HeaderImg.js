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
  width: 20px;
  height: 19px;
  margin-left: 20px;
  margin-right: 8px;
  margin-top: 4px;
`;

const StyledImgB = styled.img`
  display: inline-block;
  width: 44px;
  height: 44px;
  margin-right: 10px;
`;

export default HeaderImg;
