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
  width: 850px;
  position: relative;
  left: 425px;
  transform: translateX(-50%);
  overflow: hidden;
  margin: auto;
`;

export default ShopBoardMainList;
