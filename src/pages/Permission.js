import React from "react";
import GradeDescribe from "../components/GradeBoardComponents/Atoms/GradeDescribe";
import GradeLine from "../components/GradeBoardComponents/Atoms/GradeLine";
import GradeTextGroup from "../components/GradeBoardComponents/Molecules/GradeTextGroup";
import GradeTitle from "../components/GradeBoardComponents/Atoms/GradeTitle";
import GradePinkArea from "../components/GradeBoardComponents/Molecules/GradePinkArea";
import GradeButtonGroup from "../components/GradeBoardComponents/Molecules/GradeButtonGroup";
import GradeBoardMainTitle from "../components/GradeBoardComponents/Molecules/GradeBoardMainTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import svg1 from "../images/Vector-3.svg";
import svg2 from "../images/Vector-6.svg";
import svg3 from "../images/Vector-5.svg";
import svg4 from "../images/Vector-4.svg";
import svg5 from "../images/Vector-7.svg";
import svg6 from "../images/Vector-8.svg";

import GlobalBackground from '../components/GlobalBackground'

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

function Permission() {
  return (
    <GlobalBackground>
      <Header />
      <Wrap>
        <SIDEBAR>
          <Sidebar />
        </SIDEBAR>
        <CONTENTS>
          <GradeBoardMainTitle src={svg6} />
          <GradeDescribe />
          <GradeLine />
          <GradeTitle />
          <GradeTextGroup data={arr} />
          <GradePinkArea data={pinkArr} arr={strArr} />
          <GradeButtonGroup data={btnArr} />
        </CONTENTS>
      </Wrap>
      <FOOTER>
        <Footer />
      </FOOTER>
    </GlobalBackground>
  );
}
const Wrap = styled.div`
  width: 1080px;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  justify-content: space-between;
  top: 32px;
`;

const SIDEBAR = styled.div`
  position: relative;
`;

const CONTENTS = styled.div`
  width: 85rem;
  height: 40rem;
  border: 4px solid #cfcfcf;
  position: relative;
  outline: 3px solid black;
`;

const FOOTER = styled.div`
  position: relative;
  top: 120pt;
`;
export default Permission;
