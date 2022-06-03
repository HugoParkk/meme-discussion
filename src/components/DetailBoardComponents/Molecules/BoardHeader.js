import React from "react";
import BoardTopTitle from "../Atoms/BoardTopTitle";
import BoardTopMainText from "../Atoms/BoardTopMaintext";
import BoardLogin from "./BoardLogin";
import styled from "styled-components";

function BoardHeader(props) {
  const arr = props.data;

  return (
    <>
      <BoardTopTitle type={arr.type} text={arr.text} />
      <BoardTopMainText text={arr.text2} />
      <BoardLogin data={arr.data} />
    </>
  );
}

export default BoardHeader;
