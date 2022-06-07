import React from "react";
import styled from "styled-components";
import svg from "../../../images/Group 204.svg";
function PostBoardOn() {
  return (
    <>
      <On src={svg} />
    </>
  );
}
const On = styled.img`
  display: inline-block;
  width: 2%;
  height: 2%;
  position: relative;
  left: 4%;
  top: 6px;
  transform: translate(50%);
`;

export default PostBoardOn;
