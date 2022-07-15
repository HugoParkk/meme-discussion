import React from "react";
import styled from "styled-components";

function BoardFooter(props) {
  const arr = props.data;

  return (
    <>
      <StyledDiv>
        <Text type={arr.type}>{arr.text}</Text>
        <Sub>{arr.name}</Sub>
        <Sub>{arr.date}</Sub>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #feb6f2;
  border-bottom: 2px solid magenta;
`;

const Text = styled.div`
  width: 60%;
  color: white;
`;

const Sub = styled.div`
  color: white;
`;

export default BoardFooter;
