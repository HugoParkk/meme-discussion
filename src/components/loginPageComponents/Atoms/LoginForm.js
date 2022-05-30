import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <div>
      <InputId placeholder="아이디" />
      <InputPassword placeholder="비밀번호" />
    </div>
  );
}

const InputId = styled.form``;
const InputPassword = styled.form``;

export default LoginForm;
