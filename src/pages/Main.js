// main 페이지 입니다.
import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import MainTop from '../components/MainComponents/Organisms/MainTopComponents';
import MainBottom from '../components/MainComponents/Organisms/MainBottom';
import MainMiddle from '../components/MainComponents/Organisms/MainMiddleComponents';

import GlobalBackground from '../components/GlobalBackground'




function Main(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);

  return (
    <GlobalBackground>
      {popup && <Popup onClose={handlerPopup} />}
        <Header />
        <Wrap>
          <Assembler>
          <Sidebar data = {0} />

          <div id="main-contents">
            <MainTop >
            </MainTop>

            <MainMiddle onClick={() => { handlerPopup(true); }}>
            </MainMiddle>

            <MainBottom>
            </MainBottom>
          </div>
        </Assembler>

        {/* <div id="main-popup">
          <Popup />
        </div> */}
      </Wrap>
      <Footer/>
      
    </GlobalBackground>
  );
}

const Assembler = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

const Wrap = styled.div`
  position: relative;
  width: 1080px;
  height: 1600px;
  margin: 0 auto;

  #main-contents {
    width: 860px;
    display: inline-block;
  }
  
`;



export default Main;
