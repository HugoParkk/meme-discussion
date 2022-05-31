import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <StyledForm>
      <InputId placeholder="아이디" />
      <InputPassword placeholder="비밀번호" />
    </StyledForm>
  );
}
const StyledForm = styled.form`
  width: 90%;
  margin: 0 auto;
`;
const InputId = styled.input`
  width: 100%;
  height: 30px;
  font-size: 13px;
  border-bottom: 0;
  border: 1px solid #cfcfcf;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  outline: none;
`;
const InputPassword = styled.input`
  width: 100%;
  height: 30px;
  font-size: 13px;
  border: 1px solid #cfcfcf;
  border-top: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
`;

export default LoginForm;
