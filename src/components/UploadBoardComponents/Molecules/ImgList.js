import React from "react";
import styled from "styled-components";
import Img from "../Atoms/Img";

function ImgList(props) {
  return (
    <Wrap>
      {props.data.map((arr, i) => {
        return <Img src={arr} key={i} />;
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  position: relative;
  height: 205px;
  background-color: pink;
  margin-top: 15px;
  border: 2px solid #bbb;
  overflow-x: scroll;
`;

export default ImgList;
