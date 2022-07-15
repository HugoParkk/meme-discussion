import React from "react";
import styled from "styled-components";

function BoardCostText() {
  return (
    <StyledDiv>
      <span>14,000짤</span><button>안전결제신청</button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 8px;
  top: 20pt;
  span{
    font-size: 20px;
    font-weight: bold;
  }
  button{
    font-size: 12px;
    font-weight: bold;
    padding: 3px 5px;
    border: 0;
    text-align: center;
    background-color: #dbdbdb;
    border-radius: 8px;
  }
`;

export default BoardCostText;
