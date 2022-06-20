import React from "react";
import styled from "styled-components";
import ImgAreaLeft from "./ImgAreaLeft";
import ImgAreaRight from "./ImgAreaRight";

function UploadImgArea(props) {
  return (
    <Wrap>
      <ImgAreaRight />
      <ImgAreaLeft frame={props.frame} back={props.back} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 95%;
  margin: 20px auto 0 auto;
  height: 400px;
  display: flex;
  justify-content: space-between;
`;

export default UploadImgArea;
