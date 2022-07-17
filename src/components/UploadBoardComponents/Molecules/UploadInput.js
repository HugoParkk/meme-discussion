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
  margin-top: 20px;
`;

const StyledInput = styled.input`
  display: block;
  width: 868px;
  /* position: relative; */
  border: 4px solid #ffd4ed;
  outline: 2px solid black;
  padding: 10px;
  font-size: 13px;
  ::placeholder {
    font-size: 13px;
  }
`;

export default UploadInput;
