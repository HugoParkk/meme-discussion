import React, { useState, useRef } from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import GlobalBackground from '../components/GlobalBackground';


// 이미지--------------
import bg from '../images/bg_card.jpg';
import cardBG from '../images/cardBackground.jpg'
import hands from '../images/public_compoment/warning_hand.svg';
import bell from '../images/Vector-2.svg';
import on from '../images/Group 204.svg';
import peopleTwo from '../images/Vector-6.svg';
import peopleOne from '../images/Vector-3.svg';
import humen from '../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg';
// import Card from '../images/Card_com.png';
import { useLocation } from 'react-router-dom'
import html2canvas from "html2canvas";


function Main() {
  const location = useLocation();
  const data = location.state;

  const printRef = useRef();
  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'jjal.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  return (
    <GlobalBackground>

      <Wrap>
        <Header />
        <div id="wor">
          <Sidebar />
          <div id="nea">
            <MainS>
              <div id="Title_sum">
                <div id="title">
                  <h3><img src={hands} id="hand_icon" alt="hand_icon"/><div id="text">짤 매물을 올렸어요!</div></h3>
                  <div id="buttons">
                    <a href="http://localhost:3000/upload"><button id="back">이전으로</button></a>
                    <a href="http://localhost:3000/main"><button id="hom">홈으로 돌아가기</button></a>
                  </div>
                </div>
                <div id="title_bottom">
                  <div><p>밈품명품에 첫 매물 등록 완료! 갓기회원으로 자동등업 되었어요!</p></div>
                  <div id="belling"><img src={bell} id="bell_icon" alt="bell_icon"/><div id="tex">게시글 알림</div><img src={on} /></div>
                </div>
              </div>
              <div id="Card">
                <div id="a" ref={printRef}>
                  <div id="title_z">{data.name}</div>
                  {data.img == "/static/media/03bcbd1f18de9cdc981199b3a4bb29ab.eb036cc355e96f8ceaab.jpg" ?
                    <img src={data.img} id="hu"></img>
                    :
                    <img src={window.URL.createObjectURL(data.img)} id="hu"></img>
                  }
                  <div id="sul">{data.detail}</div>
                </div>
              </div>
              <DownloadBtn onClick={handleDownloadImage}>다운로드</DownloadBtn>
            </MainS>

            <Ser>
              <div id="ser_in">
                <div id="title">
                  카페의 회원 등급
                </div>
                <ul>
                  <li>
                    <ul id="lv2">
                      <li><img src={peopleOne} /><span id="god">갓기 회원</span></li><li>밈품명품 카페 가입 및 짤1개 이상 올린 회원</li>
                    </ul>

                    <ul id="lv2">
                      <li><img src={peopleTwo} /><span>읍내짱 회원</span></li><li>방문수 1000회+게시글 수 1000개 이상 및  NFT 지갑 연결 완료 대상</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="info">
                <ul>
                  <li id="str">내 활동정보</li> | <li>총 게시글 0개</li> | <li>댓글수 0개</li> | <li>방문수 45회</li> | <li>가입일 2012.12.14.</li>
                </ul>

              </div>


            </Ser>
          </div>

        </div>

      </Wrap>
      <Footer></Footer>

    </GlobalBackground>
  );
}

const DownloadBtn = styled.button`
width: 109px;
height: 30px;

text-align: center;
border: #ccc solid 1px;
margin-left: 370px;
border-radius: 5px;
font-size: 12px;
cursor: pointer;
background-color: #FF50E2;
color: #fff;
`

const MainS = styled.div`
  width: 845px;
  height: 544px;
  background: url(${bg});
  margin-left: 20px;
  border: 3px solid #ccc;
  outline: 2px solid #000;
  h3{
    margin: 35px 25px;
    display: flex;
    font-size: 22px;
  }
  img{
    margin-top: 20px;
    /* margin-right: 11px;s */
  }
  #hand_icon{
    margin-top: 5px;
    margin-right: 8px;
    width: 20px;
  }
  #text{
    line-height: -1;
  }
  #title{
    display: flex;
    justify-content: space-between;
    #buttons{
      
      margin-right: 20px;
      height: 30px;
      button{
        
        width: 76px;
        height: 30px;
        border: #ccc solid 1px;
        margin: 40px 0px;
        padding: 0;
        background: #fff;
        border-radius: 5px;
        font-size: 12px;
        cursor: pointer;
        
      }
      #hom{
        margin: 0 10px;
        width: 109px;
        background-color: #FF50E2;
        color: #fff;
      }
      
    }
    
  }
  #title_bottom{
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid #FF50E2;
    width: 770px;
    margin: auto;
    height: 55px;

  }
  #belling{
    display: flex;
    margin: 10px 10px 0px 0;
    img{
      margin: auto 5px;
      margin-top: 2px;
    }
    #bell_icon{
      width: 16px;
    }
    font-size: 14px;
    height: 10px;

  }
  p{
      color: #FF50E2;
      font-size: 13px;
      width: 400px;
      margin-left: 16px;
      
    }

  #Title_sum{
    
  }

  #Card{
    text-align: center;
    width: 226px;
    height: 336px;
    
    #ca{
      width: 227px;
      height: 340px;
      position: absolute;
      
      left: 50%;
    }
    #title_z{
      width: 214px;
      margin: 34px 0;
      margin-top: 24px;
      margin-bottom: 44px;
    }
    
    #hu{
      width: 152px;
      height: 152px;
      margin-top:-24px;

    }

    #a{
      width: 214px;
      height: 320px;
      background: url(${cardBG}) no-repeat;
      background-size: 214px;
      position: absolute;
      margin-left:318px;
      margin-top: 6px;
      
    }
    #sul{
      width: 214px;
      margin-top: 24px;

      font-size: 11px;
    }
    
  }

`

const Ser = styled.div`
  width: 853px;
  height: 178px;
  background: #FFF4FD;
  margin-left: 20px;
  margin-top: 15px;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    margin: 0;
    padding: 0;
  }
  span{
    color: #000;
  }
  #info{
    padding: 20px;
    ul{
      display: flex;
      font-size: 13px;
      color: #ccc;
    }
    li{
      margin: 0 10px;
      color:#000;
    }
    #str{
      font-weight: bold;
      margin-left: -3px;
    }
  }
  #lv2{
    display: flex;
    margin-top: 10px;
    font-size: 13px;
    li{
      margin-right: 15px;
      color: #cdcdcd;
    }
    #god{
      width: 64px;
      height: 20px;
      background: #FF50E2;
      color: #fff;
      border-radius: 3px;
      padding: 1px 3px;
      margin-right: 7px;
      margin-left: 4px;
    }
  }
  #ser_in{
    padding: 20px;
    border-bottom: 1px solid #FF50E2;
  }
  #title{
    color: #FF50E2;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  img{
    margin-right: 10px;
  }

  
`
const Wrap = styled.div`
  margin: auto;
  width: 1080px;
  height: 1850px;

  #wor{
    margin: 40px auto;
    display: flex;
  }

`


export default Main;
