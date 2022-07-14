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

const data = [
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
    type1: "black",
    text1: "짤이름",
    text2: "[댓글수]",
    type2: "pink",
    sub1: "닉네임",
    sub2: "2020.05.22",
    sub3: "조회 14,500",
  },
  {
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

function ProductList() {
  return (
    <>
      <Header />

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

        <ShopBoardGroup>
          <ShopBoardTimeSelect />
          <ShopBoardCommentSelect />
        </ShopBoardGroup>
        <ShopBoardFindGroup />
      </CONTENTS>
      <Footer />
    </>
  );
}

const HR = styled.hr`
  width: 65rem;
  margin-left: 12pt;
  position: absolute;
  margin-top: -960pt;
`;
const HR2 = styled.hr`
  width: 95%;
  margin-left: 20pt;
  position: relative;
  overflow: hidden;
  top: -80pt;
`;

const ShopBoardGroup = styled.div`
  margin-left: -200pt;
  margin-top: -20pt;
  position: relative;
`;

const SIDEBAR = styled.div`
  position: absolute;
  left: 120pt;
  top: 172pt;
  margin: 10pt;
`;

const CONTENTS = styled.div`
  width: 810pt;
  height: 1200pt;
  border: 3px solid black;
  position: relative;
  left: 310pt;
  top: 30pt;

  margin-bottom: 40pt;
`;

export default ProductList;
