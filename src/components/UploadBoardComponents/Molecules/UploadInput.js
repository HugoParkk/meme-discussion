import React from "react";
import styled from "styled-components";

function UploadInput() {
  return (
    <Wrap>
      <StyledInput type="text" placeholder="제목을 입력해 주세요" />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 60px;
`;

const StyledInput = styled.input`
  display: block;
  width: 45.25vw;
  position: relative;
  border: 0.2604vw solid #ffd4ed;
  outline: 0.1563vw solid black;
  padding: 0.5208vw;
  font-size: 1.3333vw;
  ::placeholder {
    font-size: 1.3333vw;
  }
`;

export default UploadInput;
