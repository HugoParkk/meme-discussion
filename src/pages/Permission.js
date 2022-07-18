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
import Sidebar from "../components/pages_Sidebar";
import styled from "styled-components";

import svg1 from "../images/Vector-3.svg";
import svg2 from "../images/Vector-6.svg";
import svg3 from "../images/Vector-5.svg";
import svg4 from "../images/Vector-4.svg";
import svg5 from "../images/Vector-7.svg";
import svg6 from "../images/Vector-8.svg";

import GlobalBackground from '../components/GlobalBackground'
import Background from "../components/GlobalBackground";

function Permission() {
  return (
    <GlobalBackground>
      <All>
        <Header />
        <Wrap>
          <SIDEBAR>
            <Sidebar />
          </SIDEBAR>
          <CONTENTS>
            <BackgroundColor>
              <GradeBoardMainTitle src={svg6} />
              <GradeDescribe />
              <GradeLine />
              <GradeTitle />
              <GradeTextGroup data={arr} />
              <GradePinkArea data={pinkArr} arr={strArr} />
              <GradeButtonGroup data={btnArr} />
            </BackgroundColor>
          </CONTENTS>
        </Wrap>
        <Footer />
      </All>
    </GlobalBackground>
  );
}
const All = styled.div`
  width: 1080px;
  margin: auto;
`
const Wrap = styled.div`
  width: 1080px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const SIDEBAR = styled.div`
  position: relative;
`;

const CONTENTS = styled.div`
  width: 855px;
  height: 615.5px;
  border: 4px solid #cfcfcf;
  position: relative;
  outline: 2px solid black;
`;

const BackgroundColor = styled.div`
  position: absolute;
  width: 847px;
  height: 608px;
  background: #fff;
`

const pinkArr = [
  { text: "자동등업", subText: "매니저가 설정한 조건을 만족하면 신청 없이 등업이 됩니다." },
  { text: "등업게시판", subText: "매니저가 설정한 조건을 만족하면 등업게시판에 등업 신청이 가능합니다. 매니저 수락을 거쳐 등업됩니다." },
];

const arr = [
  { text: "갓기 회원", subText: "밈품명품 카페 가입 및 짤 1개 이상 올린 회원", img: "yes", src: svg1, type: "pink" },
  {
    text: "읍내짱 회원",
    subText: "방문수 1000회+게시글 수 1000개 이상 및  NFT 지갑 연결 완료 대상",
    img: "yes",
    src: svg2,
    type: "black",
  },
  {
    text: "지역구 회원",
    subText: "방문수 2000회+게시글 수 2000개 이상 및 인증센터 휴대폰,  NFT 지갑 본인인증 완료 회원",
    img: "yes",
    src: svg3,
    type: "black",
  },
  {
    text: "전국구 회원",
    subText: "방문수 5000회+게시글 수 3000개 이상 및 인증센터 모든 인증 완료 회원",
    img: "yes",
    src: svg4,
    type: "black",
  },
  {
    text: "주인짱 회원",
    subText: "광고/홍보/판매 등을 목적으로 밈품명품에 계정을 등록한 판/구매자",
    img: "yes",
    src: svg5,
    type: "black",
  },
];

const strArr = [
  "총 게시글 0개",
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
export default Permission;
