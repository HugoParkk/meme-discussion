import React from "react";
import styled from "styled-components";
import Header from '../components/pages_Header';
import Sidebar from '../components/Sidebar';

// 이미지--------------
import bg from '../images/complet_good.png';
import hands from '../images/public_compoment/warning_hand.svg';
import bell from '../images/Vector-2.svg';
import on from '../images/Group 204.svg';
import peopleTwo from '../images/Vector-6.svg';
import peopleOne from '../images/Vector-3.svg';
import humen from '../images/03bcbd1f18de9cdc981199b3a4bb29ab.jpg';
import Card from '../images/Card_com.png';



function Main() {
  return (
    <div>
      <Wrap>
      <Header/>
      <div id="wor">
      <Sidebar/>
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
          <img src={Card}></img>
          <div id="title_z">짤 이름</div>
          <img src={humen}></img>
          <div id="sul"></div>
        </div>
        

      </MainS>
      </div>
      
      </Wrap>
      
        
      
      
    </div>
  );
}



const MainS = styled.div`
  width: 855px;
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
`
const Wrap = styled.div`
  margin: auto;
  width: 1080px;

  #wor{
    margin: 40px auto;
    display: flex;
  }
`


export default Main;
