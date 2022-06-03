import React from 'react'
import styled from 'styled-components'
import warning_hand from '../images/public_compoment/warning_hand.svg';

function Popup() {
  return (
    <div>
      <PopupMain>
      <img src={warning_hand}></img>
        <div className='GuideMain'>
        
          <h2> 아직 게시판 접근 불가 등급이세요!</h2>
          <p><span>갓기 회원</span> 등급이 되시면 읽기가 가능한 게시판입니다.<br/>
            현재 닉네임 님은 방문자 회원 등급이시며, 등업에 관련된 궁금하신 사항은 카페 매니저나 회원관리 스탭에게 문의해 주세요.
          </p>
        </div>
        
        <UserGradeGuide>
        <ul id='top'>
          <li>
            <ul>
              <li id='first'>현재 나의 회원 등급</li>
              <li id='second'>갓기회원</li>
              <li>밈품명품 카페 가입 및 짤 1개 이상 올린 회원</li>
            </ul>
          </li>
          <li>
          <ul>
              <li id='first'>다음 회원 등급</li>
              <li id='second'>갓기회원</li>
              <li>밈풍명품 카페 가입 및 짤 1개 이상 올린 회원</li>
            </ul>
          </li>
        </ul>
      </UserGradeGuide>
      <GradeUp>

            <ul>
              <li><b>자동등업</b></li><li>매니저가 설정한 조건을 만족하면 신청 없이 등업이 됩니다.</li>
            </ul>
            <ul>
              <li><b>등업게시판</b></li><li>매니저가 설정한 조건을 만족하면 등업게시판에 등업 신청이 가능합니다. 매니저 수락을 거쳐 등업됩니다.</li>
            </ul>

        <ul id='EctInfo'>
            <li><b>내 활동 정보</b></li>
            <li>총 게시글 0개</li>
            <li>댓글수 0개</li>
            <li>방문수 45회</li>
            <li>가입일 2012.12.14</li>
        </ul>

      </GradeUp>
      <button class="goBack-btn">이전으로</button>
      </PopupMain>
      <BlackBackground>
        <div></div>
      </BlackBackground>
    </div>
  )
}
const PopupMain = styled.div`
  position: absolute;
  z-index: 998;
  /* transform: translate(-50%, -50%); */
  background: #fff;
  outline: 2px solid black;
  border: 4px solid #cfcfcf;
  width: 866px;
  height: 512px;
  position: absolute;
  z-index: 990;
  img{
    width: 19px;
    margin: 46px 36px;
    position: absolute;
  }
  .GuideMain{
    width: 800px;
    margin: 45px 65px;
    p{
      font-size: 13px;
      font-weight: 550;
    }
    h2{
      font-size: 22px;
    }
    span{
      color: #FF50E2;
    }
    
  }
  .goBack-btn{
    background: #fff;
    // border: #CBCBCB;
    border-radius: 6px;
  }

`
const UserGradeGuide = styled.div`

margin: 32px;
text-align: center;
border-bottom: 1.5px solid #FF50E2;
border-top: 1.5px solid #FF50E2;
width: 800px;
  li{
    color: #999999;
    list-style: none;
    font-size: 13px;
    /* padding: 6px; */
    margin: 12px auto;
  }
  ul{
    justify-content:center;
    padding: 0;
  }

  #top{
    display: flex;
  }
  #first{
    color: #FF50E2;
    font-weight: bold;
  }
  #second{
    padding: 0 0 3px 0;
    background: #FF50E2;
    width: 59px;
    height: 20px;
	  border-radius: 3px 3px 3px 3px;
    color: #fff;
    line-height: 21.5px;
  }
`
const GradeUp = styled.div`
  font-size: 13px;
  color: #dbdbdb;
  li{
    list-style: none;
    color: black;
  }
  ul{
    display: flex;
  }
`
const BlackBackground = styled.div`
div{
  border: 0;
  padding: 0; 
  background-color: balck;
  min-height: 100%;
  background-position: center;
  background-size: cover;
  z-index: 990;
}
`
export default Popup

