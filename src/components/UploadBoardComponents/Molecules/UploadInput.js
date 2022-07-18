import React, { useState } from "react";
import styled from "styled-components";

function UploadInput(props) {
  const nameChangeHandler = (e) => {
    props.propFunction(e.currentTarget.value);
  }

  return (
    <Wrap>
      <StyledInput onChangeCapture={nameChangeHandler} type="text" placeholder="제목을 입력해 주세요" />
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 13px;
`;

const StyledInput = styled.input`
  display: block;
  width: 875px;
  height: 46px;
  /* position: relative; */
  border: 4px solid #ffd4ed;
  outline: 2px solid black;
  padding: 10px;
  padding-left: 13px;
  font-size: 13px;
  ::placeholder {
    font-size: 13px;
  }
`;

export default UploadInput;
