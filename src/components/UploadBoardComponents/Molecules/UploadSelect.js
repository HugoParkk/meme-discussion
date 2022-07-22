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
  width: 239px;
  height: 46px;
  font-size: 13px;
  color: #828181;
  border: 1px solid #ffd4ed;
  outline: 2px solid black;
  padding: 15px;
  margin-right: 196px;
  letter-spacing: -0.7px;
`;

const StyledSelect = styled.select`
  width: 627px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  border: 4px solid #ffd4ed;
  outline: 2px solid black;
  padding: 10px;
`;

const StyledOption = styled.option`
  width: 80%;
  font-size: 13px;
`;

export default UploadSelect;
