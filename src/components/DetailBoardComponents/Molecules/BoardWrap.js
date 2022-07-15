import React from "react";
import styled from "styled-components";
import BoardIconImg from "../Atoms/BoardIconImg";
import BoardName from "../Atoms/BoardName";
import BoardRating from "../Atoms/BoardRating";
import BoardQuestion from "../Atoms/BoardQuestion";
import BoardDate from "../Atoms/BoardDate";

function BoardWrap(props) {
  let arr = props.data;

  return (
    <Wrapper>
      <BoardIconImg src={arr.src} />
      <div>
        <Good>{arr.name}</Good>
        <BoardRating text={arr.rating} />
        <BoardQuestion />
        <BoardDate text={arr.date} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Good = styled.div`
  display: inline-block;
  font-weight: bold;
`;

export default BoardWrap;
