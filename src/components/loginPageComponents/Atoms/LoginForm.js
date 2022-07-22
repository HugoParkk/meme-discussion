import React from "react";
import styled from "styled-components";
import id from "../img/id-icon.png";
import password from "../img/password-icon.png";

function LoginForm() {
  return (
    <StyledForm>
      <img src={id} alt="id-icon" id="id"></img>
      <img src={password} alt="password-icon" id="password"></img>
      <InputId placeholder="아이디" img/>
      <InputPassword placeholder="비밀번호" />
    </StyledForm>
  );
}
const StyledForm = styled.form`
  width: 90%;
  margin: 0 auto;
  img {
    position: absolute;
  }
  #id {
    margin: 15px;
    padding-left: 3px;
  }
  #password {
    margin: 15px;
    padding-left: 2px;
    padding-top: 47px;
  }
`;
const InputId = styled.input`
  width: 100%;
  height: 48px;
  font-size: 15px;
  border-bottom: 0;
  border: 1px solid #cfcfcf;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  outline: none;
  padding-left: 41px;
`;
const InputPassword = styled.input`
  width: 100%;
  height: 48px;
  font-size: 15px;
  border: 1px solid #cfcfcf;
  border-top: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
  padding-left: 41px;
`;

export default LoginForm;
