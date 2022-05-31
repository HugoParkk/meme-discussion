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
  { text: "test1 | ", type: "big" },
  { text: "test2 | ", type: "big" },
  { text: "test", type: "big" },
];
const smallArr = [
  { text: "test1 | ", type: "small" },
  { text: "test2 | ", type: "small" },
  { text: "test", type: "small" },
];

function Login() {
  return (
    <div>
      <StyledImg src={back} />
      <StyledDiv>
        <Title />
        <FormBox />
        <TextGroup data={bigArr} />
        <LoginBanner src={Group} />
        <TextGroup data={smallArr} />
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
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: -4;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Login;
