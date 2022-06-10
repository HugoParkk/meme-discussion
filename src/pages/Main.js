import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Popup from '../components/Popup';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SellingImg from "../images/Vector.png"

function Main() {
  return (
    <div>
      <Warp>
        <Header />
        <MainTop>
          <div id="plsSell">
            <img src={SellingImg} alt="이미지팔아드릴게"></img>
          </div>
          <div id="Notice-Update"></div>
        </MainTop>
        {/* <div id="main-popup"><Popup /></div> */}
        {/* <div id="main-sidebar"><Sidebar /></div> */}
        <Footer />
      </Warp>
    </div>
  )
}

const Warp = styled.div`
position: relative;
width: 1080px;
margin: 0 auto;
#main-popup{
  position: absolute;
  margin: 0 100px;
}
#main-sidebar{
  position: absolute;
  left: 0;
}
`

const MainTop = styled.div`

`

export default Main