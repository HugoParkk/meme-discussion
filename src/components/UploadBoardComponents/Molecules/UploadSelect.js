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
  width: 13vw;
  font-size: 1.3333vw;
  border: 0.2604vw solid #ffd4ed;
  outline: 0.1563vw solid black;
  position: relative;
  padding: 0.7813vw;
  margin-right: 10.6771vw;
`;

const StyledSelect = styled.select`
  width: 31vw;
  font-size: 1.3333vw;
  border: 0.2604vw solid #ffd4ed;
  outline: 0.1563vw solid black;
  position: relative;
  padding: 0.7813vw;
`;

const StyledOption = styled.option`
  width: 80%;
  font-size: 14pt;
`;

export default UploadSelect;
