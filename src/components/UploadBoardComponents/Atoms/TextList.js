import React from "react";
import styled from "styled-components";
import icon from '../../../images/ZZal_sul.png';

function TextList(props) {
  return (
    <Wrap>
      {props.data.map((arr, i) => {
        return (
          <StyledDiv key={i}>
            <img src={icon} />
            <div id="text">{arr}</div>
          </StyledDiv>
        );
      })}
    </Wrap>
  );
}

const StyledDiv = styled.div`
  position: relative;
  width: 170px;
  height: 40px;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #bbb;
  align-items: center;
  img{
    width: 13px;
    height: 13px;
    margin-left: 8px;
  }
  #text{
  /* line-height: 30px; */
  height: 30px;
  font-size: 12px;
  margin-left: 5px;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  color: #676767;
  
  }
`;



const Wrap = styled.div`
  background-color: #f4f4f4;
  width: 172px;
  height: 205px;
  position: relative;
  top: 15px;
  border: 1px solid #bbb;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

// const Icon = styled.div`
//   background-color: #676767;
//   width: 13px;
//   height: 13px;
//   position: relative;
//   top: 50%;
//   transform: translateY(-50%);
//   margin-left: 10px;
//   overflow-y: scroll;
// `;

export default TextList;
