import React from "react";
import styled from 'styled-components';

function Header() {
  return (
    <div>
      <HeaderMenuTop>
      <div  id="logo">
          <img src="#" alt="채널A로고"></img> | 
          <img src="#" alt="그라운드x로고"></img> |
          <img src="#" alt="동아일보로고"></img>
        </div>

        <div  id="header-top">
          <ul>
            <li>홈</li> |
            <li>이웃</li>|
            <li>가입카페  ▼</li>|
            <li>새글</li>|
            <li>내소식</li>|
            <li>채팅</li>|
            <li>쥔짱님 ▼</li>
          </ul>
        </div>
        
      </HeaderMenuTop>
      <HeaderStyleTest><h1></h1></HeaderStyleTest>
      <HeaderBar>
        <div id="header-search"><input></input><button>검색</button></div>

        <div id="header-bar-menu">
          <ul>
            <li>홈 화면</li>
            <li>내가 제일 '짤' 나가</li>
            <li>짤장터</li>
            <li>짤 찾아 삼만리</li>
            <li>공지사항</li>
          </ul>
        </div>
      </HeaderBar>
    </div>
  );
}
const HeaderMenuTop = styled.div`
  width: 980px;
  margin: auto;
  justify-content: space-between;
  display: flex;
  color: gray;
  
  ul{
    display: flex;
    margin: auto;
    list-style: none;
    position: relative;
    width: 500px;
    padding: 10px;
    

  }
  li{
    margin: auto 5px;
    color: black;
  }
  img{
    position: relative;
    height: 20px;

  }
  div{
    width: 350px;
    
  }
  #logo{
    margin: auto 0;
  }
  #header-top{
    
    width: 430px;
  }
`
const HeaderStyleTest = styled.header`
  width: 980px;
  background: #ff50E2;
  height: 170px;
  color: white;
  float: center;
  top: -25px;
  margin: 0 auto;
  /* margin-bottom: px; */
  position: relative;
  /* margin-top: 40px; */
`
const HeaderBar = styled.div`
  width: 980px;
  height: 50px;
  background: #000;
  position: relative;
  margin: -18px auto;

  #header-search{
    height: 30px;
    padding: 12px;
    width: 300px;
    float: right;
    /* margin-right:px; */
  }
  button{
    border-radius: 0%;
    height: 24px;
    border: 0;
    top:0.3px;
    position: relative;
    width: 70px;
    background-color: #ff50E2;
    color: #fff;
    font-size: 11px;

  }
  input{
    height: 22px;
    border-radius: 0%;
    border:0;
    width: 210px;
    margin-right: 1.5px;
    box-shadow: 0.2px 0.2px 4px 0px #ff50E2 inset;
  }
  ul{
    display: flex;
    color: white;
    list-style: none;
    padding: 3px;
    margin-left: 8px;
    margin-top: 4px;

  }
  li{
    padding: 12px;
    font-size: 12px;
  }
  
`
export default Header;
