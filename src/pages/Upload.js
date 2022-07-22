import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

import bg_icon1 from "../images/change_backgroud/bg_icon1.png";
import bg_icon2 from "../images/change_backgroud/bg_icon2.png";
import bg_icon3 from "../images/change_backgroud/bg_icon3.png";
import bg_icon4 from "../images/change_backgroud/bg_icon4.png";
import bg_icon5 from "../images/change_backgroud/bg_icon5.png";
import UploadHeader from "../components/UploadBoardComponents/Molecules/UploadHeader";
import UploadInput from "../components/UploadBoardComponents/Molecules/UploadInput";
import UploadMain from "../components/UploadBoardComponents/Molecules/UploadMain";
import UploadSelect from "../components/UploadBoardComponents/Molecules/UploadSelect";
import img1 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import img2 from "../images/화면 캡처 2022-05-03 144858.png";
import img3 from "../images/3b286c0d74f710d5a290d7ccb4028ca9.jpg";
import img4 from "../images/7b6411f877dd15ce9d97b91b258ac106.jpg";
import img5 from "../images/3cfb2a7a354ceffff7a71f4c7c625023.jpg";
import img6 from "../images/jlee.png";
import Calender from "../components/UploadBoardComponents/Molecules/Calender";
import GlobalBackground from "../components/GlobalBackground";

function Upload(props) {
  const [name, setName] = useState("짤 이름");
  const [src, setSrc] = useState(img1);
  const [detail, setDetail] = useState("음악 방송 아이브 양갈래 레이");

  // const srcFunction = (e) => {
  //   setSrc(e);
  // };


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
          <UploadInput name={name} nameFunction={setName} />
          <UploadMain
            name={name}
            nameFunction={setName}
            detail={detail}
            detailFunction={setDetail}
            propFunction={setSrc}
            frame={frame}
            back={back}
            src={img1}
            data={img}
            text={text}
          />
        </form>
        <Calender name={name} detail={detail} src={src} />
      </Con>
      <Footer />
    </GlobalBackground>
  );
}
const Con = styled.div`
  display: flex;
  width: 1080px;
  height: 1220px;
  margin: 0 auto;
`;

const Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

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
const back = [bg_icon1, bg_icon2, bg_icon3, bg_icon4, bg_icon5];
const img = [img2, img3, img4, img5];
const text = [
  "짤 설명 사진.jpg",
  "짤 설명 사진.jpg",
  "짤 설명 사진.jpg",
  "짤 설명 사진.jpg",
];

export default Upload;
