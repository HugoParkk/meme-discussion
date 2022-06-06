import React from "react";
import styled from "styled-components";
import ShopBoardMain from "../Molcules/ShopBoardMain";

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
  width: 50rem;
  margin: 10px;
  display: inline-block;
`;

export default ShopBoardMainList;
