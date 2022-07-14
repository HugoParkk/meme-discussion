import React from "react";
import styled from "styled-components";

function ShopNotice(props) {
  return (
    <Wrap>
      {props.data.map((arr, i) => {
        return (
          <div key={i}>
            {arr.type === "title" ? (
              <StyledPink>
                <NoticeTitle>아</NoticeTitle>
                <TextTitle>{arr.text}</TextTitle>
                <Sub>{arr.name}</Sub>
                <Sub>{arr.date}</Sub>
                <Sub>{arr.cnt}</Sub>
              </StyledPink>
            ) : (
              <StyledDiv>
                <Notice>공지</Notice>
                <Text type={arr.type}>{arr.text}</Text>
                <Sub>{arr.name}</Sub>
                <Sub>{arr.date}</Sub>
                <Sub>{arr.cnt}</Sub>
              </StyledDiv>
            )}
          </div>
        );
      })}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0 auto;
  width: 64.5rem;
  border: 5px solid magenta;
  outline: 3px solid black;
  margin-left: 14pt;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const StyledPink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: magenta;
  border-bottom: 2px solid magenta;
  overflow: hidden;
`;

const TextTitle = styled.div`
  width: 74%;
  color: white;
  text-align: center;
  font-size: 15pt;
  overflow: hidden;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #feb6f2;
  border-bottom: 2px solid #feb6f2;
  overflow: hidden;
`;

const Text = styled.div`
  width: 75%;
  color: white;
  font-size: 12pt;
`;

const Sub = styled.div`
  color: white;
  display: flex;
  font-size: 12pt;
`;

const Notice = styled.div`
  background-color: #f7f9bd;
  padding: 1px 2px;
  text-align: center;
  border: 1px solid black;
  width: 4rem;
  border-radius: 3pt;
`;

const NoticeTitle = styled.div`
  background-color: yellowgreen;
  padding: 1px 2px;
  border: 1px solid black;
  visibility: hidden;
`;

export default ShopNotice;
