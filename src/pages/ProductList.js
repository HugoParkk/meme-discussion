import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar';
import Popup from "../components/Popup";

import ShopTopNotice from "../components/ShopBoardComponents/Molecules/ShopTopNotice";
import ShopBoardMainList from "../components/ShopBoardComponents/Molecules/ShopBoardMainList";
import ShopBoardFoooterBtnGroup from "../components/ShopBoardComponents/Molecules/ShopBoardFoooterBtnGroup";

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
import circleStar from "../images/Group 316.svg";
import plus from "../images/Group 38.svg"
import writeBtn from "../images/Group 343.svg"

import GlobalBackground from '../components/GlobalBackground';

function ProductList(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);
  return (
    <>
      {popup && <Popup onClose={handlerPopup} />}
      <GlobalBackground>
        <All>
          <Header />
          <Wrap>
            <Sidebar />
            <div>
              <CONTENTS>
                <div id="ShopTopTitle">
                  <span class="titleText">짤랑이 거래 ~~ 여기는 짤장터&nbsp;&nbsp;<img class="circleStar" src={circleStar}></img></span>
                  <img src={plus} class="plusImg"></img>
                </div>
                <ShopTopNotice />

                <ShopBoardMainList data={data} />

                <HR2 />

                <div id="write" onClick={() => { handlerPopup(true); }}><img src={writeBtn}></img></div>

                <ShopBoardFoooterBtnGroup data={num} />
              </CONTENTS>
            </div>
          </Wrap>
          <Footer />
        </All>
      </GlobalBackground>
    </>
  );
}

const All = styled.div`
  margin: auto;
  width: 1080px;
`

const Wrap = styled.div`
  width: 1080px;
  height: 1650px;
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 40px;
`;

const HR2 = styled.div`
  width: 830px;
  margin: auto;
  border-bottom:1px solid #EBEBEA;
`;

const CONTENTS = styled.div`
  width: 855px;
  background-color: #FFF;
  border: 4px solid #cfcfcf;
  position: relative;
  outline: 2px solid black;
  
  #ShopTopTitle{
    width: 100%;
    height: 90px;
    color: #FA00D0;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    .titleText{
      margin: 10px 0 0 15px;
      .circleStar{
        cursor: pointer;
      }
    }
    .plusImg{
      width:50px; 
      height: 23px;
      margin: 50px 20px 0 0;
      cursor: pointer;
    }
  }

  #write{
    margin: 15px 0 0 738px;
    cursor: pointer;
  }
`;

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

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default ProductList;
