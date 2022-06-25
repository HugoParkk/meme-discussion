import React from "react";
import styled from "styled-components";
import ShopBoardMain from "../Molecules/ShopBoardMain";

function ShopBoardMainList(props) {
  return (
    <Wrap>
      {props.data.map((arr, i) => {
        return <ShopBoardMain key={i} data={arr} />;
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 60%;
  display: inline-block;
  position: relative;
  margin-left: 61.1rem;
  transform: translateX(-50%);
  overflow: hidden;
`;

export default ShopBoardMainList;
