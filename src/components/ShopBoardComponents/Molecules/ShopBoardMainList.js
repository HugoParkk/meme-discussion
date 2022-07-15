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
  width: 120%;
  display: inline-block;
  position: relative;
  left: 25.9vw;
  transform: translateX(-50%);
  overflow: hidden;
`;

export default ShopBoardMainList;
