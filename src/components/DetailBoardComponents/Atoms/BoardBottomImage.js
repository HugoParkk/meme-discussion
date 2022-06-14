import React from "react";
import styled from "styled-components";
import png from "../../../images/Group 30.png";
function BoardBottomImage() {
  return (
    <>
      <Image src={png} />
    </>
  );
}
const Image = styled.img`
  width: 75%;
  margin: 0 auto;
  margin-top: 2rem;
  display : block;
  margin : auto;
`;
export default BoardBottomImage;
