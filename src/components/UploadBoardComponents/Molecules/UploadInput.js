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
  width: 1074px;
  left: 50%;
  transform: translateX(-50%);
  top: 60px;
`;

const StyledInput = styled.input`
  display: block;
  width: 869px;
  position: relative;
  border: 5px solid #ffd4ed;
  outline: 3px solid black;
  padding: 10px;
  font-size: 14pt;
`;

export default UploadInput;
