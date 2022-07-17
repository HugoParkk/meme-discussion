import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

import SideBarSnsUploadText from "../components/UploadBoardComponents/Atoms/SideBarSnsUploadText";
import SideBarUpload from "../components/UploadBoardComponents/Molecules/SideBarUpload";


import GlobalBackground from '../components/GlobalBackground'

//----images----
import Plus from "../images/main_page/plus.png";
import Gost from "../images/main_page/back_gost.jpg";
import Peace from "../images/main_page/peace.jpg";
import Cat from "../images/main_page/jinYoung_cat.jpg";
import Eyes from "../images/main_page/dark_tzuyu.jpg";
import Gun from "../images/main_page/fps_in_game.jpg";
import Book from "../images/main_page/find_book.jpg";

import rcBK from "../images/main_page/rightContentBK.png";

import first from "../images/main_page/dream_first.jpg";
import second from "../images/main_page/dream_second.jpg";
import third from "../images/main_page/dream_third.jpg";
import fourth from "../images/main_page/dream_fourth.jpg";

import twinkle from "../images/main_page/twinkle_bg_c.png";
import Card from "../images/main_page/Card_e.png";
import plus_box from "../images/main_page/plus_box.png";

import JJalSell from "../images/main_page/JJal_sellMain.png";


import phone from "../images/main_page/card_phone.jpg";
import dosa from "../images/main_page/card_dosa.jpg";
import heart from "../images/main_page/jinyoung_heart.png";
import mimgi from "../images/main_page/mimgi.png";


function Main(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);

  return (
    <GlobalBackground>
      {popup && <Popup onClose={handlerPopup} />}
        <Header />
        <Wrap>
          <Assembler>
      
        <div id="box1">
          <Sidebar id="public-sidebar" />
        </div>

          <div id="main-contents">
            <MainTop onClick={() => { handlerPopup(true); }}>
              <div id="sell_JJal">
                <img src={JJalSell}></img>
              </div>
              <div id="noticeUpdate">
                <div class="noticeUpdate">
                  <div id="noticeTitle">
                    <ul>
                      <li>
                        <a class="noticeText">공지 및 업데이트</a>
                      </li>
                      <li>
                        <a class="noticePlus">더보기<img src={Plus}></img></a>
                        
                      </li>
                    </ul>
                  </div>
                  <div id="noticeContent">
                    <div id="listEmptySpace">
                      <ul>
                        <li>
                          <button>공지</button>&nbsp;&nbsp;
                          <a>
                            출석미션 보상받기 오류 해결 완료되...&#91;6&#93;
                          </a>
                          <span>209</span>
                        </li>
                        <li>
                          <button>공지</button>&nbsp;&nbsp;
                          <a>
                            출석미션 보상받기 오류 해결 완료되...&#91;6&#93;
                          </a>
                          <span>209</span>
                        </li>
                        <li>
                          <button>공지</button>&nbsp;&nbsp;
                          <a>
                            출석미션 보상받기 오류 해결 완료되...&#91;6&#93;
                          </a>
                          <span>209</span>
                        </li>
                      </ul>
                    </div>
                    <div id="listBasic">
                      <ul>
                        <li>
                          <a>출석미션 보상받기 오류 해결 완료되...</a>
                          <span class="YellowText">&#91;6&#93;</span>
                          <span class="ViewNum">209</span>
                        </li>
                        <li>
                          <a>출석미션 보상받기 오류 해결 완료되...</a>
                          <span class="YellowText">&#91;6&#93;</span>
                          <span class="ViewNum">209</span>
                        </li>
                        <li>
                          <a>출석미션 보상받기 오류 해결 완료되...</a>
                          <span class="YellowText">&#91;6&#93;</span>
                          <span class="ViewNum">209</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </MainTop>

            <MainMiddle onClick={() => { handlerPopup(true); }}>
              <div id="best_JJal">
                <div id="text"><b>BEST ZZAL : 내가 제일 '짤'나가{" "}</b>
                <div id="best_more">
                  더보기 
                  <img src={plus_box}></img>
                </div>
                </div>
                <div className="card_set">
                  <div className="card">
                    <div id="name">짤 이름</div>
                    <div id="car_img">
                      <img src={phone} />
                    </div>

                    <div id="lorem">
                      짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤
                      설명 짤 설명 짤 설명 짤 설명 짤 설명{" "}
                    </div>
                    <img src={Card} />
                  </div>

                  <div className="card center">
                    <div id="name">짤 이름</div>
                    <div id="car_img">
                      <img src={heart} />
                    </div>
                    <div id="lorem">
                      짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤
                      설명 짤 설명 짤 설명 짤 설명 짤 설명{" "}
                    </div>
                    <img src={Card} />
                  </div>

                  <div className="card">
                    <div id="name">짤 이름</div>
                    <div id="car_img">
                      <img src={dosa} />
                    </div>
                    <div id="lorem">
                      짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤
                      설명 짤 설명 짤 설명 짤 설명 짤 설명{" "}
                    </div>
                    <img src={Card} />
                  </div>
                </div>
              </div>
              <div id="Rank">
                <div id="title">
                  <img src={mimgi}></img>
                </div>
                <ul id="ran">
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </MainMiddle>

            <MainBottom>
              <a href="http://localhost:3000/productlist">
                <div class="leftContent">
                  <div class="mainTitle">
                    <p class="title"><b>짤랑이 거래 ~~ 여기는 짤장터</b></p>
                    <p class="view-more">
                      <b>더보기</b>
                      <img src={Plus} />
                    </p>
                  </div>
                  <hr></hr>
                  <div class="post_content">
                    <div class="top_content">
                      <div class="post">
                        <img src={Gost}></img>
                        <div>
                          <p>
                            <b>
                              진짜 내가??? <span class="num">[2]</span>
                            </b>
                          </p>
                          <p>쿠크다스</p>
                          <p>22.05.22 조회 145</p>
                        </div>
                      </div>
                      <div class="post">
                        <img src={Peace}></img>
                        <div>
                          <p>
                            <b>
                              진짜 내가??? <span class="num">[2]</span>
                            </b>
                          </p>
                          <p>쿠크다스</p>
                          <p>22.05.22 조회 145</p>
                        </div>
                      </div>
                      <div class="post">
                        <img src={Cat}></img>
                        <div>
                          <p>
                            <b>
                              진짜 내가??? <span class="num">[2]</span>
                            </b>
                          </p>
                          <p>쿠크다스</p>
                          <p>22.05.22 조회 145</p>
                        </div>
                      </div>
                    </div>
                    <div class="bottom_content">
                      <div class="post">
                        <img src={Eyes}></img>
                        <div>
                          <p>
                            <b>
                              진짜 내가??? <span class="num">[2]</span>
                            </b>
                          </p>
                          <p>쿠크다스</p>
                          <p>22.05.22 조회 145</p>
                        </div>
                      </div>
                      <div class="post">
                        <img src={Gun}></img>
                        <div>
                          <p>
                            <b>
                              진짜 내가??? <span class="num">[2]</span>
                            </b>
                          </p>
                          <p>쿠크다스</p>
                          <p>22.05.22 조회 145</p>
                        </div>
                      </div>
                      <div class="post">
                        <img src={Book}></img>
                        <div>
                          <p>
                            <b>
                              진짜 내가??? <span class="num">[2]</span>
                            </b>
                          </p>
                          <p>쿠크다스</p>
                          <p>22.05.22 조회 145</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div class="rightContent" onClick={() => { handlerPopup(true); }}>
                <div class="mainTitle">
                  <p class="title">꿈에서 본 그 짤... 짤 찾아 삼만리</p>
                  <p class="view-more">
                    <b>더보기</b>
                    <img src={Plus} />
                  </p>
                </div>
                <div class="post">
                  <div class="textContent">
                    <p class="postTitle">
                      <b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b>
                    </p>
                    <br></br>
                    <div class="postText">쿠크다스</div>
                    <br></br>
                    <br></br>
                    <div class="postText date">22.05.22 조회 145</div>
                  </div>
                  <div class="imgContent">
                    <img src={first}></img>
                  </div>
                </div>
                <div class="post">
                  <div class="textContent">
                    <p class="postTitle">
                      <b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b>
                    </p>
                    <br></br>
                    <div class="postText">쿠크다스</div>
                    <br></br>
                    <br></br>
                    <div class="postText date">22.05.22 조회 145</div>
                  </div>
                  <div class="imgContent">
                    <img src={second}></img>
                  </div>
                </div>
                <div class="post">
                  <div class="textContent">
                    <p class="postTitle">
                      <b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b>
                    </p>
                    <br></br>
                    <div class="postText">쿠크다스</div>
                    <br></br>
                    <br></br>
                    <div class="postText date">22.05.22 조회 145</div>
                  </div>
                  <div class="imgContent">
                    <img src={third}></img>
                  </div>
                </div>
                <div class="post">
                  <div class="textContent">
                    <p class="postTitle">
                      <b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b>
                    </p>
                    <br></br>
                    <div class="postText">쿠크다스</div>
                    <br></br>
                    <br></br>
                    <div class="postText date">22.05.22 조회 145</div>
                  </div>
                  <div class="imgContent">
                    <img src={fourth}></img>
                  </div>
                </div>
              </div>
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

const MainTop = styled.div`
  width: 100%;
  height: 435px;
  position: relative;

  #sell_JJal {
    img {
      height: 430px;
      position: absolute;
      left: 0;
      border: 6px solid #cfcfcf;
      outline: 2px solid #000;
    }
  }

  #noticeUpdate {
    width: 330px;
    height: 435px;
    position: absolute;
    right: 0;

    background: #fa00d0;
    color: #ffffff;

    border: 4px solid #ff50e2;
    outline: 2px solid #000;

    ul {
      margin: 0;
      padding: 0;
    }

    .noticeUpdate {
      #noticeTitle {
        width: 330px;
        height: 40px;
        border-top: 2px solid #ff50e2;
        border-bottom: 2px solid #ff50e2;

        ul {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0;
          padding: 8px 15px;
        }
        .noticeText {
          font-size: 18px;
          font-weight: 600;
        }
        .noticePlus {
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 55px;
        }
      }

      #noticeContent {
        li {
          font-size: 13px;
          padding: 15px 0;
          border-bottom: 1px solid #ff50e2;
          .YellowText {
            color: #faff00;
          }
        }

        #listEmptySpace {
          width: 100%;
          height: 160px;

          ul {
            position: absolute;
            list-style: none;
            li {
              width: 325px;
              padding-left: 5px;
              span {
                margin-left: 10px;
              }
              button {
                font-size: 12px;
                background-color: #f7f9bd;
                border: 1px solid #000;
                border-radius: 3px;
                padding: 2px 10px;
              }
            }
          }
        }

        #listBasic {
          width: 100%;
          height: 160px;
          ul {
            list-style-position: inside;

            li {
              padding-left: 10px;

              .YellowText {
                color: #faff00;
              }
              .ViewNum {
                margin-left: 40px;
              }
            }
          }
        }
      }
    }
  }
`;

const MainMiddle = styled.div`
  display: flex;
  margin: 28px 0 10px 0;
  padding: 0;
  position: relative;
  #lorem {
    position: absolute;
    width: 156px;
    height: 52px;
    font-size: 9px;
    margin-top: 260px;
    margin-left: 47px;
    color: #fff;
  }
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
      display: flex;
      justify-content: space-between;
    }
    #best_more {
        width: 55px;
        padding: 0 10px 0 0;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    .card {
      margin: auto -16px;
      #name {
        position: absolute;
        box-sizing: border-box;
        margin-left: 100px;
        margin-top: 53px;
        color: #fff;
      }
      img {
        width: 248px;
        height: 362px;
      }
      #car_img {
        margin: 89px 44px;
        width: 155px;
        height: 155px;
        position: absolute;
        background-color: #d9d9d9;
        border: 3px solid #838383;
        outline: 2px solid #000000;
        img {
          width: 141px;
          height: 141px;
          margin: 4px 4px;
          border: 3px solid #838383;
          outline: 2px solid #515151;
        }
      }
    }
    .card_set {
      display: flex;
      justify-content: center;
      margin-top: -12px;
      /* top: 50px; */
      /* position: relative; */

      .center {
        margin-bottom: 80px;
      }
    }
  }

  #Rank {
    outline: 2px solid #000;
    width: 170px;
    height: 432px;
    background: magenta;
    margin-left: 20px;
    text-align: center;
    #ran {
      margin-top: 4px;
    }
    #number {
      width: 30px;
      height: 30px;
    }
    #title {
      width: 168px;
      height: 40px;
      background: #fa00d0;
      line-height: 2.5;
      img {
        margin-top: 6px;
      }
    }
    ul > li > ul {
      display: flex;
      margin-left: 4px;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      color: yellow;
    }
    .lv1 > ul > li {
      width: 115px;
      height: 30px;
      background: #000;
      margin: 4px;

      line-height: 2;
      box-shadow: 2.5px 2.5px 2px 1px #888 inset;
    }

    .lv1 > ul {
      width: 160px;
    }
    .lv1 {
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
  }
`;

const MainBottom = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  display: flex;
  color: white;
  a {
      text-decoration: none;
      color: #fff;
  }
  .mainTitle{
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 18px;
      //  font-weight: 600;
    }
    .view-more {
      width: 55px;
      font-size: 12px;
      padding: 10px  0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .leftContent {
    background: #fa00d0;
    width: 415px;
    height: 508px;
    border: 4px solid #ff50e2;
    outline: 2px solid #000;

    .mainTitle {margin: -10px 13px -18px 13px;}
    hr {
      border: 0px;
      height: 2px;
      background-color: #ff50e2;
    }
    .imgContent {
      width: 90px;
    }
    .post_content {
      img {
        width: 120px;
        height: 120px;
        margin: 12px 3px;
      }
      .top_content {
        position: relative;
        display: flex;
        justify-content: space-between;
        text-align: left;
        padding: 0 9px;
        p {
          font-size: 12px;
          margin: 6px 9px;
        }
        b {
          font-size: 13px;
        }
        span {
          color: #faff00;
        }
        .post {
          div {
            margin: -8px 0 10px 0;
          }
        }
      }
      .bottom_content {
        position: relative;
        display: flex;
        justify-content: space-between;
        text-align: left;
        padding: 0 9px;
        p {
          font-size: 12px;
          margin: 6px 9px;
        }
        b {
          font-size: 13px;
        }
        span {
          color: #faff00;
        }
        .post {
          div {
            margin: -8px 0;
          }
        }
      }
    }
  }

  .rightContent {
    background: url(${rcBK});
    width: 415px;
    height: 508px;
    border: 4px solid #d1d1d1;
    outline: 2px solid #000;
    margin-left: 20px;

    .mainTitle {margin: -8.7px 13px -18px 13px;}
    .post {
      img {
        width: 90px;
        height: 90px;
        margin: 10px 0 3px 2px;
      }
      .post {
        width: 386.86px;
        height: 90px;
      }
      display: flex;
      text-align: left;

      div {
        float: left;
        font-size: 12px;
        margin-top: 10px;
      }
      .postText {
        margin: 0 13px;
      }
      .date {
        margin-top: -10px;
      }

      b {
        font-size: 15px;
        margin: 0 13px;
      }
    }
  }
`;

export default Main;
