import React, {useState} from 'react';
import styled from 'styled-components';
import Popup from "../../Popup";

import Plus from "../../../images/main_page/plus.png";
import Gost from "../../../images/main_page/back_gost.jpg";
import Peace from "../../../images/main_page/peace.jpg";
import Cat from "../../../images/main_page/jinYoung_cat.jpg";
import Eyes from "../../../images/main_page/dark_tzuyu.jpg";
import Gun from "../../../images/main_page/fps_in_game.jpg";
import Book from "../../../images/main_page/find_book.jpg";
import rcBK from "../../../images/main_page/rightContentBK.png";
import first from "../../../images/main_page/dream_first.jpg";
import second from "../../../images/main_page/dream_second.jpg";
import third from "../../../images/main_page/dream_third.jpg";
import fourth from "../../../images/main_page/dream_fourth.jpg";


function MainBottom(props) {
  const { } = props;
  const [popup, handlerPopup] = useState(false);
  
  return (
    <Wrap>
      {popup && <Popup onClose={handlerPopup} />}
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
    </Wrap>

  );
}
const Wrap = styled.div`
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

    .mainTitle {
      margin: -8.7px 13px -18px 13px;
      p{cursor: pointer;}
    }
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
      .textContent, .imgContent{cursor: pointer;}
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

export default MainBottom;