import React from "react";

import UploadHeader from "../components/UploadBoardComponents/Molecules/UploadHeader";
import UploadInput from "../components/UploadBoardComponents/Molecules/UploadInput";
import UploadMain from "../components/UploadBoardComponents/Molecules/UploadMain";
import UploadSelect from "../components/UploadBoardComponents/Molecules/UploadSelect";
import img1 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import img2 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import img3 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import img4 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import img5 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";
import img6 from "../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg";

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
const img = [img2, img3, img4, img5, img6];
const text = ["123.jpg", "123.jpg", "123.jpg"];

function Main() {
  return (
    <>
      <form>
        <UploadHeader />
        <UploadSelect data={data1} />
        <UploadSelect data={data2} type="pink" />
        <UploadInput />
      </form>
      <UploadMain frame={frame} back={back} src={img1} data={img} text={text} />
    </>
  );
}

export default Main;
