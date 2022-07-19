import React from "react";
import styled from "styled-components";

import ChennelA from "../../../images/public_compoment/Channel_A_Logo.png";
import GroundX from "../../../images/public_compoment/GroundX.jpg";
import dongA from "../../../images/public_compoment/dongA_daily.png";
import Digitech from "../../../images/public_compoment/Seoul_Digitech_High_School.png";


function HeaderTop() {
    return(
        <HeaderMenuTop>
            <div id="logo">
                <img src={ChennelA} alt="채널A로고" class="chanelA"></img>&nbsp;|
                <img src={GroundX} alt="그라운드x로고"></img>&nbsp;|
                <img src={dongA} alt="동아일보로고"></img>&nbsp;|&nbsp;
                <img
                    src={Digitech}
                    alt="서울디지텍고등학교로고"
                    class="Digitech"
                ></img>
            </div>

            <div id="headerTop">
                <ul>
                    <li>홈</li> |<li>이웃</li>|<li>가입카페 ▼</li>|<li>새글</li>|
                    <li>내소식</li>|<li>채팅</li>|<li>쥔짱님 ▼</li>
                </ul>
            </div>
        </HeaderMenuTop>
    );
}

const HeaderMenuTop = styled.div`
    * {
    font-size: 8px;
  }
  width: 1080px;
  margin: auto;
  display: flex;
  color: #dbdbdb;
  line-height: 1;
  justify-content: space-between;
  ul {
    display: flex;
    margin: auto;
    margin-top: 15px;
    list-style: none;
    width: 300px;
    float: right;
  }
  li {
    margin: auto;
    color: black;
  }
  img {
    height: 20px;
  }
  #logo {
    margin: 6px 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    .chanelA {
      padding: 3px 0 0 0;
    }
    .Digitech {
      padding: 3px 0 0 0;
    }
  }
  #headerTop{
    font-size: 8px;
  }
`

export default HeaderTop;
