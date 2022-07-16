import React from "react";
import styled from "styled-components";
import ImgList from "./ImgList";
import TextList from "../Atoms/TextList";

function ImgAndList(props) {
  return (
    <Wrap>
      <ImgList data={props.data} />
      <TextList data={props.text} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 95%;
  left: 50%;
  height: 25%;
  transform: translateX(-50%);
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export default ImgAndList;
