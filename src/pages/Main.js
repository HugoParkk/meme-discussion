import React from "react";
import styled from "styled-components";

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

//----images----

import twinkle from '../images/main_page/twinkle_bg_c.png';
import Card from '../images/main_page/Card_e.png';
import plus_box from '../images/main_page/plus_box.png';

import JJalSell from "../images/main_page/JJal_sellMain.png";
// import SideBarSnsUploadText from "../components/UploadBoardComponents/Atoms/SideBarSnsUploadText";
// import SideBarUpload from "../components/UploadBoardComponents/Molecules/SideBarUpload";

function Main() {
  return (
    <div>
      <Warp>
        <Header />
        <Sidebar />
        <div id="main-contents">
          <MainTop>
            <div id="sell_JJal">
              <img src={JJalSell}></img>
            </div>
            <div id="notice_update">
              <div class="title">공지 및 업데이트<sapn>더보기 <img src={plus_box}></img></sapn></div>
              <div id="listEmptySpace">
                <ul>
                  <li><button>공지</button> 출석미션 보상받기 오류 해결 완료되...&#91;6&#93;<span class="ViewNum">209</span></li>
                  <li><button>공지</button> 출석미션 보상받기 오류 해결 완료되...&#91;6&#93;<span class="ViewNum">209</span></li>
                  <li><button>공지</button> 출석미션 보상받기 오류 해결 완료되...&#91;6&#93;<span class="ViewNum">209</span></li>
                </ul>
              </div>
              <ul>
                <li>출석미션 보상받기 오류 해결 완료되...<span class="YellowText">&#91;6&#93;</span><span class="ViewNum">209</span></li>
                <li>출석미션 보상받기 오류 해결 완료되...<span class="YellowText">&#91;6&#93;</span><span class="ViewNum">209</span></li>
                <li>출석미션 보상받기 오류 해결 완료되...<span class="YellowText">&#91;6&#93;</span><span class="ViewNum">209</span></li>
              </ul>
            </div>
          </MainTop>

          <MainMiddle>
            <div id="best_JJal">
              <div id="text">
                BEST ZZAL : 내가 제일 '짤'나가{" "}
                <span>
                  더보기 <img src={plus_box}></img>
                </span>
              </div>
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
            <div id="Rank"></div>
          </MainMiddle>
        </div>
        {/* <div id="main-popup">
          <Popup />
        </div> */}

        <Footer id="public-footer" />
      </Warp>
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


      padding: 10px;
      margin-left: 10px;
      span {
        font-size: 12px;
        font-weight: bold;
        margin-left: 325px;
      }
    }
    .card{
    margin: auto -16px;
    img{
      width: 248px;
      height: 352px;
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
}

  #Rank {
    width: 172px;
    height: 432px;
    background: magenta;
  }
`

const MainTop = styled.div`
  width: 100%;
  height: 428px;
  position: relative;

  #sell_JJal {
    width: 490px;
    height: 100%;
    position: absolute;
    left: 0;
    background: #cfcfcf;

    img {
      padding: 5px 0 0 5px;
    }
  }

  #notice_update {
    width: 360px;
    height: 100%;
    position: absolute;
    right: 0;
    background: #ff05e2;
    color: #FFFFFF;

    #title{
      font-size: 18px;
      font-weight: 600;
      span{
        font-size: 12px;
      }
    }

    #listEmptySpace {
      height: 100px;

      ul {
        position: absolute;
        list-style: none;
        left: -18px;
        li {
          button {
            font-size: 12px;
          }
        }
      }
    }

    ul{
      left: -7px;
      li{
        font-size: 13px;
        padding: 5px 0;
        }
      }
    }
  }
`

const Warp = styled.div`
/*여기에 public의 코드는 공통 컴포넌트로 넘길 생각 중 */
position: relative;
width: 1080px;
margin: 0 auto;
/* min-height: 100vh; */

#public-popup{
  position: absolute;
  margin: 0 100px;
}

  #public-sidebar {
    display: inline;
    left: 0;
  }

  #main-contents {
    /* position: absolute; */
    width: 865px;
    /* top: 238px; */
  } 
  

  #public-footer {
    position: absolute;
  }
`;

export default Main;
