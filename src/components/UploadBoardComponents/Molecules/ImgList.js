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
  height: 90%;
  background-color: #f4f4f4;
  margin-top: 15px;
  border: 2px solid #bbb;
  overflow-x: scroll;
`;

export default ImgList;
