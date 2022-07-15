import React from "react";
import styled from "styled-components";
import BodyArea from '../components/PostBoardComponents/Molcules/BodyArea'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FooterArea from "../components/PostBoardComponents/Molcules/FooterArea";
import Footer from "../components/Footer"
import svg1 from "../images/Vector-3.svg";
import svg2 from "../images/Vector-6.svg";

import GlobalBackground from '../components/GlobalBackground'

const data = [
  { src: svg1, img: "yes", text: "갓기 회원", type: "pink", subText: "test" },
  {
    src: svg2,
    img: "yes",
    text: "읍내짱 회원",
    type: "black",
    subText: "test",
  },
];

const arr = [
  "총 게시글 0개",
  " | ",
  "댓글수 0개",
  " | ",
  "방문수 45회",
  " | ",
  "가입일 2012.12.14",
];
function Main() {
  return (
    <GlobalBackground>
      <Header />
      <Sidediv>
        <SideCenterdiv>
          <Sidebar />
          <BodyArea />
        </SideCenterdiv>
        <FooterArea data={data} arr={arr} />
      </Sidediv>
      <Footerdiv>
        <Footer />
      </Footerdiv>
    </GlobalBackground>
  );
}
const Footerdiv = styled.div`
margin-top: 60rem;
`;

const SideCenterdiv = styled.div`
display: flex;   
`;

const Sidediv = styled.div`
  margin-left: 26rem;
  margin-top: 3rem;
`;

export default Main;
