import React from "react";
import styled from "styled-components";

function UploadSelect(props) {
  return (
    <>
      {props.type === "pink" ? (
        <PinkSelect>
          {props.data.map((arr, i) => {
            return <StyledOption key={i}>{arr}</StyledOption>;
          })}
        </PinkSelect>
      ) : (
        <StyledSelect>
          {props.data.map((arr, i) => {
            return <StyledOption key={i}>{arr}</StyledOption>;
          })}
        </StyledSelect>
      )}
    </>
  );
}

const PinkSelect = styled.select`
  background-color: #ffd4ed;
  cursor: pointer;
  width: 248px;
  font-size: 16px;
  border: 4px solid #ffd4ed;
  outline: 2px solid black;
  position: relative;
  padding: 15px;
  margin-right: 205px;
`;

const StyledSelect = styled.select`
  width: 600px;
  cursor: pointer;
  font-size: 16px;
  border: 4px solid #ffd4ed;
  outline: 2px solid black;
  position: relative;
  padding: 10px;
`;

const StyledOption = styled.option`
  width: 80%;
  font-size: 16px;
`;

export default UploadSelect;
