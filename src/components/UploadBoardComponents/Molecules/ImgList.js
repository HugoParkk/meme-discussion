import React from "react";
import styled from "styled-components";
import Img from "../Atoms/Img";

function ImgList(props) {
  return (
    <Wrap>
      <List>
        {props.data.map((arr, i) => {
          return <div><Img src={arr} key={i} /></div>;
        })}
      </List>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 80%;
  height: 205px;
  background-color: #f4f4f4;
  margin-top: 15px;
  border: 2px solid #bbb;
  white-space: nowrap;
`;

const List = styled.div`
  overflow-x: scroll;
  width: 100%;
/*height: 15vw;*/
  height: 100%;

  div {
    cursor: pointer;
    width: 20%;
    display: inline;
  }
`;

const Li = styled.li`
  display:inline-block; 
  margin-right:10px;
`;


export default ImgList;
