import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

import UploadHeader from "../components/UploadBoardComponents/Molecules/UploadHeader";
import UploadInput from "../components/UploadBoardComponents/Molecules/UploadInput";
import UploadMain from "../components/UploadBoardComponents/Molecules/UploadMain";
import UploadSelect from "../components/UploadBoardComponents/Molecules/UploadSelect";
import img1 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import img2 from "../images/화면 캡처 2022-05-03 144858.png";
import img3 from "../images/3b286c0d74f710d5a290d7ccb4028ca9.jpg";
import img4 from "../images/7b6411f877dd15ce9d97b91b258ac106.jpg";
import img5 from "../images/3cfb2a7a354ceffff7a71f4c7c625023.jpg";
import Molu from "../components/UploadBoardComponents/Molecules/Molu";
import GlobalBackground from '../components/GlobalBackground';

const data1 = ["게시판을 선택하세요", "게시판1", "게시판2", "게시판2"];
const data2 = ["말머리 선택", "말머리1", "말머리2", "말머리3"];

const frame = [
  "#FF5050",
  "#FF6006",
  "#FFF850",
  "#59FF1F",
  "#50A1FF",
  "#28357C",
  "#C900A8",
  "#D6D6D6",
  "#7E7E7E",
  "#2C2C2C",
  "#FE7272",
  "#FF81AE",
  "#DBDF0F",
  "#FFB950",
  "#50E0FF",
  "#E4CDE2",
  "#50FFD5",
];
const back = ["black", "black", "black", "black", "black"];
const img = [img2, img3, img4, img5];
const text = [
  "짤 설명 사진.jpg",
  "짤 설명 사진.jpg",
  "짤 설명 사진.jpg",
  "짤 설명 사진.jpg",
];

function Upload() {
  return (
    <GlobalBackground>
      <Header />
      <UploadHeader />
      <Con>
        <form>
          <Wrap>
            <UploadSelect data={data1} />
            <UploadSelect data={data2} type="pink" />
          </Wrap>
          <UploadInput />
          <UploadMain
            frame={frame}
            back={back}
            src={img1}
            data={img}
            text={text}
          />
        </form>
        <Molu />
      </Con>
      <Footer type="upload" />
    </GlobalBackground>
  );
}
const Con = styled.div`
  display: flex;
  width: 1074px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  Molu{
    a{
      text-decoration: none;
      color: #fff;
    }
  }
`;

const Wrap = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  display: flex;
  justify-content: space-between;
`;

export default Upload;
