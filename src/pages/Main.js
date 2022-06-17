import React from 'react';
import styled from 'styled-components';
 
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
 
//----images----
 
import twinkle from '../images/main_page/twinkle_bg.png';
// import Card from '../images/main_page/Card.png';
import Plus from '../images/main_page/plus.png';
 
import Gost from '../images/main_page/back_gost.jpg';
import Peace from '../images/main_page/peace.jpg';
import Cat from '../images/main_page/jinYoung_cat.jpg';
import Eyes from '../images/main_page/dark_tzuyu.jpg';
import Gun from '../images/main_page/fps_in_game.jpg';
import Book from '../images/main_page/find_book.jpg';

// import twinkle from '../images/main_page/twinkle_bg_c.png';
import Card from '../images/main_page/Card_e.png';
import plus_box from '../images/main_page/plus_box.png';

import JJalSell from "../images/main_page/JJal_sellMain.png";
// import SideBarSnsUploadText from "../components/UploadBoardComponents/Atoms/SideBarSnsUploadText";
// import SideBarUpload from "../components/UploadBoardComponents/Molecules/SideBarUpload";

import rcBK from '../images/main_page/rightContentBK.png';

import first from '../images/main_page/dream_first.jpg';
import second from '../images/main_page/dream_second.jpg';
import third from '../images/main_page/dream_third.jpg';
import fourth from '../images/main_page/dream_fourth.jpg';
 
function Main() {
 return (
   <div>
   
   <Warp>
        <Header />
        <div id="public-sidebar">
          <Sidebar />
        </div>
        <div id="main-contents">


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
          <MainBottom>
       <div class="leftContent">
          <div class="mainTitle">
            <p class="title">짤랑이 거래 ~~ 여기는 짤장터</p>
            <p class="view-more"><b>더보기</b><img src={Plus} /></p>
          </div>
          <hr></hr>
            <div class="post_content">
              <div class="top_content">
                <div class="post">
                  <img src={Gost}></img>
                  <div>
                    <p><b>진짜 내가??? <span class="num">[2]</span></b></p>
                    <p>쿠크다스</p>
                    <p>22.05.22 조회 145</p>
                  </div>
                </div>
                <div class="post">
                <img src={Peace}></img>
                  <div>
                    <p><b>진짜 내가??? <span class="num">[2]</span></b></p>
                    <p>쿠크다스</p>
                    <p>22.05.22 조회 145</p>
                  </div>
                </div>
                <div class="post">
                <img src={Cat}></img>
                  <div>
                    <p><b>진짜 내가??? <span class="num">[2]</span></b></p>
                    <p>쿠크다스</p>
                    <p>22.05.22 조회 145</p>
                  </div>
                </div>    
            </div>
            <div class="bottom_content">
                <div class="post">
                <img src={Eyes}></img>
                  <div>
                    <p><b>진짜 내가??? <span class="num">[2]</span></b></p>
                    <p>쿠크다스</p>
                    <p>22.05.22 조회 145</p>
                  </div>
                </div>
                <div class="post">
                <img src={Gun}></img>
                  <div>
                    <p><b>진짜 내가??? <span class="num">[2]</span></b></p>
                    <p>쿠크다스</p>
                    <p>22.05.22 조회 145</p>
                  </div>
                </div>
                <div class="post">
                <img src={Book}></img>
                  <div>
                    <p><b>진짜 내가??? <span class="num">[2]</span></b></p>
                    <p>쿠크다스</p>
                    <p>22.05.22 조회 145</p>
                  </div>
                </div>    
            </div>
          </div>
        </div>

        <div class="rightContent"> 
          <div class="mainTitle">
            <p class="title">꿈에서 본  그 짤... 짤 찾아 삼만리</p>
            <p class="view-more"><b>더보기</b><img src={Plus} /></p>
          </div>
          <div class="post">
            <div class="textContent">
              <p class="postTitle"><b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b></p>
              <br></br>
              <div class="postText">쿠크다스</div>
              <br></br><br></br>
              <div class="postText">22.05.22 조회 145</div>
            </div>
            <div class="imgContent">
              <img src={first}></img>
            </div>
          </div>
          <div class="post">
            <div class="textContent">
              <p class="postTitle"><b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b></p>
              <br></br>
              <div class="postText">쿠크다스</div>
              <br></br><br></br>
              <div class="postText">22.05.22 조회 145</div>
            </div>
            <div class="imgContent">
              <img src={second}></img>
            </div>
          </div>
          <div class="post">
            <div class="textContent">
              <p class="postTitle"><b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b></p>
              <br></br>
              <div class="postText">쿠크다스</div>
              <br></br><br></br>
              <div class="postText">22.05.22 조회 145</div>
            </div>
            <div class="imgContent">
              <img src={third}></img>
            </div>
          </div>
          <div class="post">
            <div class="textContent">
              <p class="postTitle"><b>진짜 웃겼는데 못찾는 짤이거든?? ㅜㅜㅜ...</b></p>
              <br></br>
              <div class="postText">쿠크다스</div>
              <br></br><br></br>
              <div class="postText">22.05.22 조회 145</div>
            </div>
            <div class="imgContent">
              <img src={fourth}></img>
            </div>
          </div>
        </div>

     </MainBottom>

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
 
const MainBottom = styled.div `
 margin: 0;
 padding: 0;
 list-style: none;
 text-align: center;
 display: flex;
 color: white;
 .leftContent {
   background: #FA00D0;
   width: 412.8px;
   height: 511.21px;
   border: 4px solid #FF50E2;
   outline: 2px solid #000;

   .mainTitle {
    margin: -10px 13px -18px 13px;
    display: flex;
    justify-content: space-between;
   
    .title {
      font-size: 18px;
     //  font-weight: 600;
    }
    .view-more {
      font-size: 12px;
      padding: 10px 19px;
      position: relative;
      img {
        margin-left: 5px;
        position: absolute;
      }
    }
  }
  hr {
    border: 0px;
    height: 2px;
    background-color: #FF50E2;
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
 
        p {font-size: 12px; margin: 6px 9px;}
        b {font-size: 13px;}
        span {color: #FAFF00;}
 
        .post { div {margin: -8px 0 10px 0} }
     }
 
    .bottom_content {
       position: relative;
        display: flex;
        justify-content: space-between;
        text-align: left;
        padding: 0 9px;
 
        p {font-size: 12px; margin: 6px 9px;}
        b {font-size: 13px;}
        span {color: #FAFF00;}
 
        .post { div {margin: -8px 0} }
      }
    }
 }

  .rightContent {
    background: url(${rcBK});
    width: 412.8px;
    height: 511.21px;
    border: 4px solid #D1D1D1;
    outline: 2px solid #000;

    

    .mainTitle {
    margin: -8.7px 13px -18px 13px;
    display: flex;
    justify-content: space-between;
   
    .title {
      font-size: 18px;
     //  font-weight: 600;
    }
    .view-more {
      font-size: 12px;
      padding: 10px 19px;
      position: relative;
      img {
        margin-left: 5px;
        position: absolute;
        }
      }
    }
    .post {
      img {width: 90px; height: 90px; margin: 12px 0 3px 32px}
      .post {width: 386.86px; height: 90px;} 

      div {
        float: left;
        font-size: 12px;
        margin-top: 10px;
      }
      .postText {
        margin: 0 13px;
      }

      b {font-size: 15px; margin: 0 13px;}
    }
  }
`
 
/* min-height: 100vh; */

const Warp = styled.div `
#public-sidebar{
  position: absolute;
  left: 0;
}

#public-popup{
  position: absolute;
  margin: 0 100px;
}
#main-contents{
  position: relative;
  width: 850px;
  top: 37.5px;
  left: 230px;
  
} 

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
 
 
 
