import React from "react";
import styled from "styled-components";

function ImgAreaLeftTitle(props) {
  return (
    <>
      <Text>{props.text}</Text>
    </>
  );
}

const Text = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 5px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  position: relative;
`;

export default ImgAreaLeftTitle;
