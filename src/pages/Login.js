import React from "react";
import GradeTextGroup from "../components/GradeBoardComponents/Molecules/GradeTextGroup";
import Title from "../components/loginPageComponents/Atoms/Title";
import FormBox from "../components/loginPageComponents/Molecules/FormBox";
import TextGroup from "../components/loginPageComponents/Molecules/TextGroup";
import LoginBanner from "../components/loginPageComponents/Atoms/LoginBanner";
import CopyRight from "../components/loginPageComponents/Atoms/CopyRight";

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
      <Title />
      <FormBox />
      <TextGroup data={bigArr} />
      <LoginBanner />
      <TextGroup data={smallArr} />
      <CopyRight />
    </div>
  );
}

export default Login;
