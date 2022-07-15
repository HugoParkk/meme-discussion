import React from "react";
import ShopBoardMainList from "../components/ShopBoardComponents/Molecules/ShopBoardMainList";
import ShopBoardTopText from "../components/ShopBoardComponents/Atoms/ShopBoardTopText";
import ShopNotice from "../components/ShopBoardComponents/Molecules/ShopNotice";
import ShopBoardFindGroup from "../components/ShopBoardComponents/Molecules/ShopBoardFindGroup";
import ShopBoardTimeSelect from "../components/ShopBoardComponents/Atoms/ShopBoardTimeSelect";
import ShopBoardCommentSelect from "../components/ShopBoardComponents/Atoms/ShopBoardCommentSelect";
import ShopBoardFoooterBtnGroup from "../components/ShopBoardComponents/Molecules/ShopBoardFoooterBtnGroup";
import ShopBoardFooterNext from "../components/ShopBoardComponents/Atoms/ShopBoardFooterNext";
import ShopBoardwriteBtn from "../components/ShopBoardComponents/Atoms/ShopBoardwriteBtn";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from '../components/pages_Sidebar';
import ShopBoardTopPlusBtn from "../components/ShopBoardComponents/Atoms/ShopBoardTopPlusBtn";

import lovepari from "../images/fd7b8305ab14a05f23fc53a7405cd983.jpg";
import bookfound from "../images/5f83a752c924315a6aa03aa5f3e13927.jpg";
import Bbang from "../images/5bfb4d1298c4c0d80a4a917eae0f1a8d.jpg";
import nun from "../images/5b7b5bead5269cb5e28f2df6d62863df.jpg";
import img2 from "../images/3dbc7b29a958677e052c307b8fc4ad53.jpg";
import chungchun from "../images/3cfb2a7a354ceffff7a71f4c7c625023.jpg";
import aing from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import yheah from "../images/3b286c0d74f710d5a290d7ccb4028ca9.jpg";
import bill from "../images/2d1441ab4efa9bfbab3f40e68cf59ff1.jpg";
import gagul from "../images/2c0f85cda379cc9ab1c2912c527e0d95.jpg";
import img3 from "../images/02b796f3090ec136409f2189d7a9fcc9.jpg";
import geguri from "../images/1ae00b0948a6376c01bcf396d617fdfb.jpg";

import GlobalBackground from '../components/GlobalBackground';

const data = [
  {
    order: 0,
    src: lovepari,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 1,
    src: bookfound,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 2,
    src: Bbang,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 3,
    src: nun,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 4,
    src: img2,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 5,
    src: chungchun,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 6,
    src: aing,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 7,
    src: yheah,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 8,
    src: bill,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 9,
    src: gagul,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 10,
    src: img3,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    order: 11,
    src: geguri,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
];

const arr = [
  { type: "title", text: "제목", name: "작성자", date: "작성일", cnt: "조회" },
  {
    text: "제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
    cnt: "209",
  },
  {
    text: "제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
    cnt: "209",
  },
  {
    text: "제목제목제목제목제목제목제목제목",
    name: "스태프",
    date: "2022.05.04",
    cnt: "209",
  },
];

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Main() {
  return (
    <GlobalBackground>
      
      <Header />
      
      
      <Wrap>
        <SIDEBAR>
          <Sidebar />
        </SIDEBAR>
        <div>
          <CONTENTS>
            <ShopBoardTopText />
            <ShopBoardTopPlusBtn />
            <ShopNotice data={arr} />
            <ShopBoardMainList data={data} />

            <ShopBoardwriteBtn />
            <ShopBoardFoooterBtnGroup data={num} />
            <ShopBoardFooterNext />
            <HR2 />
            <Back>
              <HR3 />
              <ShopBoardGroup>
                <ShopBoardTimeSelect />
                <ShopBoardCommentSelect />
              </ShopBoardGroup>
              <ShopBoardFindGroup />
            </Back>
          </CONTENTS>
        </div>
      </Wrap>

      <FOOTER>
        <Footer />
      </FOOTER>
    </GlobalBackground>
  );
}

const Wrap = styled.div`
  width: 56vw;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  justify-content: space-between;
  top: 1.667vw;
`;

const HR2 = styled.hr`
  width: 95%;
  margin-left: 1.042vw;
  position: relative;
  overflow: hidden;
  top: -5.04vh;
`;

const ShopBoardGroup = styled.div`
  margin-left: -13.888vw;
  margin-top: 4.167vw;
  position: relative;
`;

const SIDEBAR = styled.div`
  position: relative;
  margin-right: 10px;
  
`;

const CONTENTS = styled.div`
  width: 45vw;
  border: 0.208vw solid #cfcfcf;
  position: relative;
  outline: 0.156vw solid black;
`;

const FOOTER = styled.div`
  position: relative;
  top: 12vw;
`;

const HR3 = styled.hr`
  width: 95%;
  margin-left: 1.042vw;
  position: relative;
  overflow: hidden;
  top: 4.861vw;
`;

const Back = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f9f9f8;
  height: 9.5vw;
`;

export default Main;
