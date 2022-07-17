import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import GlobalBackground from '../components/GlobalBackground';


// 이미지--------------
import bg from '../images/bg_card.jpg';
import hands from '../images/public_compoment/warning_hand.svg';
import bell from '../images/Vector-2.svg';
import on from '../images/Group 204.svg';
import peopleTwo from '../images/Vector-6.svg';
import peopleOne from '../images/Vector-3.svg';
import humen from '../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg';
// import Card from '../images/Card_com.png';



function Main() {
  return (
    <GlobalBackground>

      <Wrap>
      <Header/>
      <div id="wor">
      <Sidebar/>
      <div id="nea">
      <MainS>
        <div id="Title_sum">
          <div id="title">
            <h3><img src={hands}/><div id="text">짤 매물을 올렸어요!</div></h3>
            <div id="buttons"><button id="back">이전으로</button><button id="hom">홈으로 돌아가기</button></div>
         </div>
         <div id="title_bottom">
            <div><p>밈품명품에 첫 매물 등록 완료! 갓기회원으로 자동등업 되었어요!</p></div>
            <div id="belling"><img src={bell}/><div id="tex">게시글 알림</div><img src={on}/></div>
          </div>
        </div>
        
        <div id="Card">
          {/* <img src={Card} id="ca">
          </img> */}
          <div id="a">
            <div id="title_z">짤 이름</div>
            <img src={humen} id="hu"></img>
            <div id="sul">음악방송 아이브 양갈래 헤어</div>
          </div>
        </div>
        

      </MainS>
      <Ser>
        <div id="ser_in">
          <div id="title">
            카페의 회원 등급
          </div>
          <ul>
             <li>
                <ul id="lv2">
                  <li><img src={peopleOne}/><span id="god">갓기 회원</span></li><li>밈품명품 카페 가입 및 짤1개 이상 올린 회원</li>
                </ul>

                <ul id="lv2">
                <li><img src={peopleTwo}/><span>읍내짱 회원</span></li><li>방문수 1000회+게시글 수 1000개 이상 및  NFT 지갑 연결 완료 대상</li>
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



const MainS = styled.div`
  width: 835px;
  height: 535px;
  background: url(${bg});
  margin-left: 15px;
  border: 3px solid #ccc;
  outline: 2px solid #000;
  h3{
    margin: 35px 25px;
    display: flex;
    font-size: 22px;
  }
  img{
    
    margin-right: 6px;
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
      
      margin: auto 4px;
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
    height: 340px;
    
    #ca{
      width: 227px;
      height: 340px;
      position: absolute;
      
      left: 50%;
    }
    #title_z{
      margin: 40px auto;
    }
    
    #hu{
      width: 152px;
      height: 152px;
      margin-top:-24px;

    }

    #a{
      position: absolute;
      margin-left:348px;
      margin-top: 5px;
      
    }
    #sul{
      margin: 20px 0 0 -10px;
      font-size: 11px;
    }
    
  }

`

const Ser = styled.div`
  width: 845px;
  height: 178px;
  background: #FFF4FD;
  margin-left: 12px;
  margin-top: 14px;
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
  #nea{
    margin-left: 15px;
  }

`


export default Main;
