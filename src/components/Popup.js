import React from 'react'
import styled from 'styled-components'
import warning_hand from '../images/public_compoment/warning_hand.svg';

function Popup() {
  return (
    <div>
        <PopupMain>
          <img src={warning_hand}></img>
            <div className='GuideMain'>
            
              <h2>아직 게시판 접근 불가 등급이세요!</h2>
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
              <ul id='lv1' className='space'>
                <li id='first'><b>자동등업</b></li><li>매니저가 설정한 조건을 만족하면 신청 없이 등업이 됩니다.</li>
              </ul>
              <ul id='lv1'>
                <li id='first'><b>등업게시판</b></li><li>매니저가 설정한 조건을 만족하면 등업게시판에 등업 신청이 가능합니다. 매니저 수락을 거쳐 등업됩니다.</li>
              </ul>
    
              <ul id='EctInfo'>
                  <li id='first'><b>내 활동정보</b></li> 
                  <li>총 게시글 0개</li> |
                  <li>댓글수 0개</li> |
                  <li>방문수 45회</li> |
                  <li>가입일 2012.12.14</li>
              </ul>
            <div id='bg'></div>
          </GradeUp>
          <button class="goBack-btn">이전으로</button>
        </PopupMain>
        <BlackBackground></BlackBackground>
    </div>
  )
}
const PopupMain = styled.div`
  position: absolute;
  z-index: 999;
  /* transform: translate(-50%, -50%); */
  background: #fff;
  outline: 2px solid black;
  border: 4px solid #cfcfcf;
  width: 866px;
  height: 512px;
  position: absolute;
  
  img{
    width: 19px;
    margin: 37px 0 0 25px;
    position: absolute;
  }
  .GuideMain{
    width: 800px;
    margin: 35px 50px 50px 50px;
    height: 75px;
    p{
      font-size: 13px;
      font-weight: 550;
      line-height: 2;
    }
    h2{
      font-size: 22px;
      margin: 0;
    }
    span{
      color: #FF50E2;
    }
    
  }
  .goBack-btn{
    background: #fff;
    // border: #CBCBCB;
    border-radius: 5px;
    position: relative;
    margin: 35px auto;
    display:block;
    width: 74px;
    height: 30px;
    border: 1.5px solid #999999;
  }

`
const UserGradeGuide = styled.div`

margin: 32px;
text-align: center;

border-top: 1.5px solid #FF50E2;
width: 800px;
height: 120px;
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
    margin-top: 0px;
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
  width: 800px;
  margin: -10px 30px;
  padding: 10px auto;
  font-size: 13px;
  color: #dbdbdb;
  
  border-top: 1.5px solid #FF50E2;
  background: #fff4f9;
  #bg{
    height: 10px;
  }
  .space{
    padding-top: 15px;
  }
  #lv1{
    margin: 5px -30px;
    li{
      color: #999999;
    }
  }
  li{
    list-style: none;
    color: black;
    margin: auto 5px;
    
  }
  ul{
    display: flex;
  }
  b{
    color: black;
  }
  #first{
      width: 80px;
      
    }
  #EctInfo{
    margin-top: 30px;
    margin-left: -30px;
    li{
      /* font-weight: bold; */
    }
    #first{
      font-weight: 600;
      font-size: 13;
      
    }
    
  }
`
const BlackBackground = styled.div`
  position: fixed;
  left: 0; 
  right: 0; 
  bottom: 0; 
  top: 0 ;
  z-index: 995;
  background: rgba(0,0,0,0.5);
 
`
export default Popup

