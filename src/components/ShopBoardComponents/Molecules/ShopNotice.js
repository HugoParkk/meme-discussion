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
  width: 43.403vw;
  border: 0.26vw solid magenta;
  outline: 0.156vw solid black;
  margin-left: 0.694vw;
  margin-bottom: 0.833vw;
  overflow: hidden;
`;

const StyledPink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.521vw 1.042vw;
  background-color: magenta;
  border-bottom: 0.104vw solid magenta;
  overflow: hidden;
  height: 2.43vw;
`;

const TextTitle = styled.div`
  width: 24.48vw;
  color: white;
  text-align: center;
  font-size: 1.042vw;
  overflow: hidden;
  line-height: 1.042vw;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.521vw 1.042vw;
  background-color: #feb6f2;
  border-bottom: 0.104vw solid magenta;
  overflow: hidden;
  height: 2.43vw;
`;

const Text = styled.div`
  width: 15.625vw;
  color: white;
  font-size: 0.833vw;
  margin-left: 0.694vw;
  line-height: 20pt;
  position: relative;
  left: -1.389vw;
  margin-right: 7.639vw;
`;

const Sub = styled.div`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 0.694vw;
`;

const Notice = styled.div`
  background-color: #f7f9bd;
  text-align: center;
  border: 0.156vw solid black;
  width: 3.333vw;
  height: 2.468vh;
  border-radius: 0.208vw;
  line-height: 2vh;
  cursor: pointer;
  font-size: 0.833vw;
`;

const NoticeTitle = styled.div`
  background-color: yellowgreen;
  padding: 0.052vw 0.104vw;
  border: 0.052vw solid black;
  visibility: hidden;
`;

export default ShopNotice;
