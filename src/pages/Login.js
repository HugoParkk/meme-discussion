import React from "react";
import styled from "styled-components";
import Title from "../components/loginPageComponents/Atoms/Title";
import TextGroup from "../components/loginPageComponents/Molecules/TextGroup";
import CopyRight from "../components/loginPageComponents/Atoms/CopyRight";

const BigData = [
  { text: "비밀번호 찾기 | ", type: "big" },
  { text: "아이디 찾기 | ", type: "big" },
  { text: "회원가입 ", type: "big" },
];

const SmallData = [
  { text: "이용약관 | ", type: "small" },
  { text: "개인정보처리방침 | ", type: "small" },
  { text: "책임의 한계와 법적고지 | ", type: "small" },
  { text: "회원정보 고객센터 ", type: "small" },
];

function Login() {
  return (
    <>
      <StyledDiv>
        <Title></Title>
        <TextGroup data={BigData}></TextGroup>
        <br />
        <TextGroup data={SmallData}></TextGroup>
        <br />
        <CopyRight></CopyRight>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Login;
