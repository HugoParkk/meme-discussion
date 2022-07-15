/* eslint-disable no-unused-vars */
import React from "react";

//----images----
import img1 from "../images/Ellipse 3.png";
import img2 from "../images/fd7b8305ab14a05f23fc53a7405cd983.jpg";

import GradeLine from "../components/GradeBoardComponents/Atoms/GradeLine";
import BoardHeader from "../components/DetailBoardComponents/Molecules/BoardHeader";
import BoardImg from "../components/DetailBoardComponents/Atoms/BoardImg";
import BoardContents from "../components/DetailBoardComponents/Molecules/BoardContents";
import BoardLine from "../components/DetailBoardComponents/Atoms/BoardLine";
import BoardBottomDescribe from "../components/DetailBoardComponents/Atoms/BoardBottomDescribe";
import BoardBuyChat from "../components/DetailBoardComponents/Atoms/BoardBuyChat";
import BoardNFT from "../components/DetailBoardComponents/Atoms/BoardNFT";
import BoardBottomText from "../components/DetailBoardComponents/Atoms/BoardBottomText";
import BoardEmail from "../components/DetailBoardComponents/Atoms/BoardEmail";
import BoardName from "../components/DetailBoardComponents/Atoms/BoardName";
import BoardTopTitle from "../components/DetailBoardComponents/Atoms/BoardTopTitle";
import BoardBottomImage from "../components/DetailBoardComponents/Atoms/BoardBottomImage";
import BoardBottomLastText from "../components/DetailBoardComponents/Atoms/BoardBottomLastText";
import BoardFooterList from "../components/DetailBoardComponents/Molecules/BoardFooterList";
import Header from "../components/Header";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const data = {
  type: "pink",
  text: "방송캡쳐 >",
  text2: "짤 판매 제목",
  data: {
    cnt: "0",
    data: {
      src: img1,
      name: "판매자",
      rating: "열심회원",
      date: "2022.05.04 00:27 조회 5",
    },
  },
};

const data2 = [
  { text: "상품 상태", text2: "700*700", note: "px" },
  { text: "생성 날짜", text2: "2022.05.04", note: "209" },
];

const data3 = [
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
  {
    text: "제목제목제목제목제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
  },
];

function ProductDetail() {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar id="public-sidebar" />
        <Wrap>
          <BoardHeader data={data} />
          <GradeLine />
          <BoardImg src={img2} />
          <BoardContents data={data2} />
          <BoardLine />
          <BoardName text="거래자" />
          <BoardEmail />
          <BoardTopTitle text="코드보기 >" />
          <BoardNFT />
          <BoardBuyChat />
          <BoardBottomText />
          <BoardBottomDescribe />
          <GradeLine2 />
          <BoardBottomImage />
          <BoardBottomLastText text="디지털풍화 없는 고화질 짤 팝니다. 다른짤 묶어서 같이 구매하시면 네고해드려요~" />
        </Wrap>
      </Flex>

      <BoardFooterList data={data3} />
      <FOOTER>
        <Footer />
      </FOOTER>
    </>
  );
}

const Flex = styled.div`
  margin-top: 2.8vh;
  width: 70vw;
  display: flex;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  justify-content: space-between;
`;

const Wrap = styled.div`
  width: 860px;
  height: 1300pt;
  border: 3px solid #cfcfcf;
  outline: 2px solid black;
`;

const GradeLine2 = styled.div`
  height: 2px;
  width: 90%;
  background-color: #ff50e2;
  margin: 0 auto;
  margin-top: -80px;
  margin-bottom: 2rem;
`;

const FOOTER = styled.div`
  position: relative;
  top: 100pt;
`;

export default ProductDetail;
