import React from "react";
import styled from 'styled-components';

function Header() {
  return (
    <div>
      
      <HeaderStyleTest><h1></h1></HeaderStyleTest>
      <HeaderBar>
        <div id="header-search"><input></input><button>검색</button></div>
      </HeaderBar>
    </div>
  );
}

const HeaderStyleTest = styled.header`
  width: 1080px;
  background: #ff50E2;
  height: 200px;
  color: white;
  float: center;
  top: 35px;
  margin: auto;
  margin-bottom: 15px
`
const HeaderBar = styled.div`
  width: 1080px;
  height: 50px;
  background: #000;
  
  margin: auto;
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
    top:1.8px;
    position: relative;
    width: 60px;

  }
  input{
    height: 22px;
    border-radius: 0%;
    border:0;
    width: 210px;
    margin-right: 2px;
    box-shadow: 2px 2px 2px 2px;
  }
`


export default Header;
