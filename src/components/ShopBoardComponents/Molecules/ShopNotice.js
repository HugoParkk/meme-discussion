import React from "react";
import styled from "styled-components";

function ShopNotice(props) {
  return (
    <>
      {props.data.map((arr, i) => {
        return (
          <>
            {arr.type === "title" ? (
              <StyledPink>
                <TextTitle type={arr.type}>{arr.text}</TextTitle>
                <Sub>{arr.name}</Sub>
                <Sub>{arr.date}</Sub>
              </StyledPink>
            ) : (
              <StyledDiv>
                <Notice>공지</Notice>
                <Text type={arr.type}>{arr.text}</Text>
                <Sub>{arr.name}</Sub>
                <Sub>{arr.date}</Sub>
              </StyledDiv>
            )}
          </>
        );
      })}
    </>
  );
}

const StyledPink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: hotpink;
  border-bottom: 2px solid hotpink;
`;

const TextTitle = styled.div`
  width: 60%;
  color: white;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: pink;
  border-bottom: 2px solid hotpink;
`;

const Text = styled.div`
  width: 60%;
  color: white;
`;

const Sub = styled.div`
  color: gray;
`;

const Notice = styled.div`
  background-color: yellowgreen;
  padding: 1px 2px;
  border: 1px solid black;
`;

export default ShopNotice;
