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
import Sidebar from "../components/Sidebar";
import ShopBoardTopPlusBtn from "../components/ShopBoardComponents/Atoms/ShopBoardTopPlusBtn";
import img1 from "../images/화면 캡처 2022-05-03 144858.png";

const data = [
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    src: img1,
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
    <>
      <Header />
      <Wrap>
        <SIDEBAR>
          <Sidebar />
        </SIDEBAR>

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
      </Wrap>
      
      <FOOTER>
        <Footer />
      </FOOTER>
    </>
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

const HR2 = styled.hr`
  width: 95%;
  margin-left: 15pt;
  position: relative;
  overflow: hidden;
  top: -30pt;
`;

const ShopBoardGroup = styled.div`
  margin-left: -200pt;
  margin-top: 60pt;
  position: relative;
`;

const SIDEBAR = styled.div`
  position: relative;
`;

const CONTENTS = styled.div`
  width: 650pt;
  height: 1100pt;
  border: 4px solid #cfcfcf;
  position: relative;
  outline: 3px solid black;
`;

const FOOTER = styled.div`
  position: relative;
  top: 120pt;
`;

const HR3 = styled.hr`
  width: 95%;
  margin-left: 15pt;
  position: relative;
  overflow: hidden;
  top: 70pt;
`;

const Back = styled.div`
  background-color: #f9f9f8;
  height: 12.4rem;
`;

export default Main;
