import React from "react";
import styled from "styled-components";

function TextList(props) {
  return (
    <Wrap>
      {props.data.map((arr, i) => {
        return (
          <StyledDiv key={i}>
            <Icon />
            <Text>{arr}</Text>
          </StyledDiv>
        );
      })}
    </Wrap>
  );
}

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #bbb;
`;

const Text = styled.div`
  line-height: 30px;
  height: 30px;
  font-size: 0.8rem;
  margin-left: 5px;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  color: #676767;
`;

const Wrap = styled.div`
  background-color: #e0e0e0;
  width: 18%;
  height: 205px;
  position: relative;
  top: 15px;
  border: 1px solid #bbb;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  background-color: #676767;
  width: 13px;
  height: 13px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  overflow-y: hidden;
`;

export default TextList;
