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
  background-color: pink;
  width: 24.8%;
  font-size: 14pt;
  border: 5px solid pink;
  outline: 3px solid black;
  position: relative;
  left: 11%;
  top: 10px;
  padding: 15px;
`;

const StyledSelect = styled.select`
  width: 35%;
  font-size: 14pt;
  border: 5px solid pink;
  outline: 3px solid black;
  position: relative;
  left: 10%;
  padding: 15px;
  top: 10px;
`;

const StyledOption = styled.option`
  width: 80%;
  font-size: 14pt;
`;

export default UploadSelect;
