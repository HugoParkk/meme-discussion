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
  width: 15.5rem;
  font-size: 1.2rem;
  border: 5px solid #ffd4ed;
  outline: 3px solid black;
  position: relative;
  padding: 15px;
  margin-right: 205px;
`;

const StyledSelect = styled.select`
  width: 37.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  border: 5px solid #ffd4ed;
  outline: 3px solid black;
  position: relative;
  padding: 15px;
`;

const StyledOption = styled.option`
  width: 80%;
  font-size: 14pt;
`;

export default UploadSelect;
