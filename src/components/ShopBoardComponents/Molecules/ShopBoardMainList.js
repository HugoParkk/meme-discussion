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
  width: 70%;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export default ShopBoardMainList;
