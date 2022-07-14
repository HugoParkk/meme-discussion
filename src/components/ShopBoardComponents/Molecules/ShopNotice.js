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
  width: 625pt;
  border: 5px solid magenta;
  outline: 3px solid black;
  margin-left: 10pt;
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
  height: 35pt;
`;

const TextTitle = styled.div`
  width: 60%;
  color: white;
  text-align: center;
  font-size: 15pt;
  overflow: hidden;
  line-height: 12pt;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #feb6f2;
  border-bottom: 2px solid #feb6f2;
  overflow: hidden;
  height: 40pt;
`;

const Text = styled.div`
  width: 300px;
  color: white;
  font-size: 12pt;
  margin-left: 10pt;
  line-height: 20pt;
  position: relative;
  left: -20pt;
  margin-right: 110pt;
`;

const Sub = styled.div`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 10pt;
`;

const Notice = styled.div`
  background-color: #f7f9bd;
  padding: 1px 2px;
  text-align: center;
  border: 1px solid black;
  width: 4rem;
  border-radius: 3pt;
  line-height: 20pt;
`;

const NoticeTitle = styled.div`
  background-color: yellowgreen;
  padding: 1px 2px;
  border: 1px solid black;
  visibility: hidden;
`;

export default ShopNotice;
