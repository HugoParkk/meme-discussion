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
  width: 27px;
  height: 27px;
  margin-left: 2rem;
  margin-right: .5rem;
`;

const StyledImgB = styled.img`
  display: inline-block;
  width: 44px;
  height: 44px;
  margin-right: 10px;
`;

export default HeaderImg;
