import React from "react";
import GradeDescribe from "../components/GradeBoardComponents/Atoms/GradeDescribe";
import GradeLine from "../components/GradeBoardComponents/Atoms/GradeLine";
import GradeTextGroup from "../components/GradeBoardComponents/Molecules/GradeTextGroup";
import GradeTitle from "../components/GradeBoardComponents/Atoms/GradeTitle";
import GradePinkArea from "../components/GradeBoardComponents/Molecules/GradePinkArea";
import GradeButtonGroup from "../components/GradeBoardComponents/Molecules/GradeButtonGroup";
import GradeBoardMainTitle from "../components/GradeBoardComponents/Molecules/GradeBoardMainTitle";
import svg1 from "../images/Vector-3.svg";
import svg2 from "../images/Vector-6.svg";
import svg3 from "../images/Vector-5.svg";
import svg4 from "../images/Vector-4.svg";
import svg5 from "../images/Vector-7.svg";
import svg6 from "../images/Vector-8.svg";

const pinkArr = [
  { text: "자동등업", subText: "text" },
  { text: "등업게시판", subText: "text" },
];

const arr = [
  { text: "갓기 회원", subText: "good", img: "yes", src: svg1, type: "pink" },
  {
    text: "읍내짱 회원",
    subText: "good",
    img: "yes",
    src: svg2,
    type: "black",
  },
  {
    text: "지역구 회원",
    subText: "good",
    img: "yes",
    src: svg3,
    type: "black",
  },
  {
    text: "전국구 회원",
    subText: "good",
    img: "yes",
    src: svg4,
    type: "black",
  },
  {
    text: "주인짱 회원",
    subText: "good",
    img: "yes",
    src: svg5,
    type: "black",
  },
];

const strArr = [
  "총 개시글 0개",
  " | ",
  "댓글수 0개",
  " | ",
  "방문수 45개",
  " | ",
  "가입일 2012.12.14",
];

const btnArr = [
  { text: "이전으로", type: "white" },
  { text: "짤 게시하기", type: "pink" },
];

function Main() {
  return (
    <>
      <GradeBoardMainTitle src={svg6} />
      <GradeDescribe />
      <GradeLine />
      <GradeTitle />
      <GradeTextGroup data={arr} />
      <GradePinkArea data={pinkArr} arr={strArr} />
      <GradeButtonGroup data={btnArr} />
    </>
  );
}

export default Main;
