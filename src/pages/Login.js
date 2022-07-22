import React from "react";
import styled from "styled-components";
import Title from "../components/loginPageComponents/Atoms/Title";
import FormBox from "../components/loginPageComponents/Molecules/FormBox";
import TextGroup from "../components/loginPageComponents/Molecules/TextGroup";
import LoginBanner from "../components/loginPageComponents/Atoms/LoginBanner";
import CopyRight from "../components/loginPageComponents/Atoms/CopyRight";
import Group from "../images/Group 30.png";
import back from "../images/image 12.png";

const bigArr = [
  { text: " 비밀번호찾기 ㅤ|ㅤ ", type: "big" },
  { text: " 아이디찾기ㅤ ㅤ|ㅤ", type: "big" },
  { text: " 회원가입", type: "big" },
];
const smallArr = [
  { text: "이용약관 ㅤ|ㅤ ", type: "small" },
  { text: "개인정보처라방침 ㅤ|ㅤ ", type: "small" },
  { text: "책임의 한계와 법적고지 ㅤ|ㅤ ", type: "small" },
  { text: "회원정보고객센터", type: "small" },
];

function Login() {
  return (
    <div>
      <StyledImg src={back} />
      <StyledDiv>
        <Title />
        <FormBox />
        <TextGroup data={bigArr} type={"BIG"} />
        <LoginBanner src={Group} />
        <TextGroup data={smallArr} type={"SMALL"} />
        <CopyRight />
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: -4;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Login;
