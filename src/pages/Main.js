import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
// import Popup from '../components/Popup';
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

//----images----

import twinkle from "../images/main_page/twinkle_bg_c.png";
import Card from "../images/main_page/Card_a.png";
import plus_box from "../images/main_page/plus_box.png";

import JJalSell from "../images/main_page/JJal_sellMain.png";
import SideBarSnsUploadText from "../components/UploadBoardComponents/Atoms/SideBarSnsUploadText";
import SideBarUpload from "../components/UploadBoardComponents/Molecules/SideBarUpload";

function Main() {
  return (
    <div>
      {/* <Warp>
      <Header/>
        <div id="public-sidebar"><Sidebar /></div>
        <div id = "main-contents">
        <MainTop>
          <div id="sell_JJal"><img src={JJalSell}></img> </div>
          <div id="notice_update">
            <div class="title"></div>
            <div id="listEmptySpace">
              <ul>
                <li><button>공지</button><span>209</span></li>
                <li><button>공지</button><span>209</span></li>
                <li><button>공지</button><span>209</span></li>
              </ul>
            </div>
            <ul>
              <li><span>209</span></li>
              <li><span>209</span></li>
              <li><span>209</span></li>
            </ul>
          </div>
        </MainTop>

        <MainMiddle>
        <div id="best_JJal">
          <div id='text' >BEST ZZAL : 내가 제일 '짤'나가 <span>더보기 <img src={plus_box}></img></span></div>
          <div className="card_set">
            <div className="card">
              <img src={Card} />
            </div>
          
            <div className="card center">
              <img src={Card} />
            </div>
          
            <div className="card">
              <img src={Card} />
            </div>
          </div>

        </div>
        <div id="Rank">
       
        </div>
          </MainMiddle>

          </div> */}
      {/* <div id="main-popup"><Popup /></div> */}

      {/* <div id="main-popup"><Popup /></div> */}
      {/* <Footer id="public-footer"/>
      </Warp > */}
      <SideBarUpload />
    </div>
  );
}

const MainMiddle = styled.div`
  display: flex;
  margin: 20px auto;
  padding: 0;
  position: relative;
  #best_JJal {
    width: 670px;
    height: 424px;
    background: url(${twinkle});

    margin: 0 0 14px 0;
    border: 4px solid #ccc;
    outline: 2px solid #000;
    #text {
      font-size: 18px;

      /* border-bottom: 2px solid #cfcfcf; */
      padding: 10px;
      margin-left: 10px;
      span {
        font-size: 12px;
        font-weight: bold;
        margin-left: 325px;
      }
    }
    .card {
      margin: auto -8px;
      img {
        width: 238px;
        height: 342px;
      }
    }
    .card_set {
      display: flex;
      justify-content: center;
      /* top: 50px; */
      /* position: relative; */

      .center {
        margin-bottom: 60px;
      }
    }
  }

  #Rank {
    width: 172px;
    height: 432px;
    background: magenta;
  }
`;

const MainTop = styled.div`
  width: 100%;
  height: 428px;
  position: relative;

  #sell_JJal {
    width: 492px;
    height: 100%;
    position: absolute;
    left: 0;
    background: #cfcfcf;

    img {
      padding: 5px 0 0 5px;
    }
  }

  #notice_update {
    width: 338px;
    height: 100%;
    position: absolute;
    right: 0;
    background: #ff05e2;
    #listEmptySpace {
      height: 100px;

      ul {
        position: absolute;
        list-style: none;
        left: -10px;
        li {
          padding: 5px 0;
        }
      }
    }
  }
`;

const Warp = styled.div`
  /*여기에 public의 코드는 공통 컴포넌트로 넘길 생각 중 */
  position: relative;
  width: 1080px;
  margin: 0 auto;
  /* min-height: 100vh; */

  #public-sidebar {
    position: absolute;
    left: 0;
  }

  #public-popup {
    position: absolute;
    margin: 0 100px;
  }

  #main-contents {
    position: relative;
    width: 850px;
    top: 37.5px;
    left: 230px;
  }

  #public-footer {
    position: absolute;
  }
`;

export default Main;
