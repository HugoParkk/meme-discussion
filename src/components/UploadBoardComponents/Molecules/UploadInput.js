import React from "react";
import styled from "styled-components";

function UploadInput() {
  return <StyledInput type="text" placeholder="제목을 입력해 주세요" />;
}

const StyledInput = styled.input`
  display: block;
  width: 60.8%;
  position: relative;
  left: 10%;
  border: 5px solid #ffd4ed;
  outline: 3px solid black;
  top: 30px;
  padding: 10px;
  font-size: 14pt;
`;

export default UploadInput;
