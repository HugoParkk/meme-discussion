import React from "react";
import styled from "styled-components";
import svg from "../../../images/Vector-2.svg";
function PostBoardBell() {
  return (
    <>
      <Bell src={svg} />
    </>
  );
}
const Bell = styled.img`
  display: inline-block;
  width: 2%;
  height: 2%;
  position: relative;
  left: -4%;
  top: 6px;
  transform: translate(50%);
`;
export default PostBoardBell;
