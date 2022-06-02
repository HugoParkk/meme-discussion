import React from 'react'
import styled from 'styled-components';

import bookmarkStar from './images/public_compoment/star_sideMenu.svg';
import profile from './images/public_compoment/profile.svg';
import crown from './images/public_compoment/crown.png';
import NewIcon from './images/public_compoment/icon_New.png';
import L_shape from './images/public_compoment/L_shape.png';
import bottomImg from './images/public_compoment/Group 13.png';


function Sidebar() {
  return (
    <div>
      <UpSideMenuBar>
        <div id="head">
          <div id="BookMarkIcon">
            <img src={bookmarkStar} alt="북마크아이콘"></img>
          </div>
          <div id="tab-title">
            <ul> 
              <li>카페정보</li>
              <li id="my-activity">나의활동</li>
            </ul>
          </div>
        </div>
        
        <div id="Userinfo">
          <div id="Userprofile">
            <img src={profile} alt="프로필이미지"></img>
            <div id="Nick"><span id="gradeBox">매니저</span>&nbsp;<b>주인짱</b></div>
            <ul id="profile-info">
              <li>since 2002.02.02.</li>
              <li>카페소개</li>
            </ul>
          </div>

          <div id="CafeInfo">
            <ul>
              <li>
                <ul id="Queen">
                  <li><img src={crown} alt="Queen아이콘"></img></li>
                  <li><b>&nbsp;퀸</b></li>
                </ul>
              </li>
              <li><ul id='Invite'><li>18,936,555</li><li id='text'>초대하기</li> </ul></li>
              <li>
                <ul id="CafeInformation">
                  <li>즐겨찾는 멤버<span>3,543,257 명</span></li>
                  <li>게시판 구독수<span>2,463,669 회</span></li>
                  <li>우리카페앱 수<span>152,262 회</span></li>
                </ul>
              </li>
            </ul>
            <div id="Topic">주제  재테크 &gt; <b>NFT</b> </div>
            <div id="Btns">
              <ul>
                <li><button id="BtnHotpink">짤 게시하기</button></li>
                <li><button>주인장 전화하기</button></li>
                <li><button>주인장 채팅하기</button></li>
              </ul>
            </div>
          </div>
        </div>        
      </UpSideMenuBar>

      <DownSideMenu>
        <div id="DownSideMenuBar">
          <div id="DownSideMenu">
              <div id="Sideba-search"><input></input><button>검색</button></div>
              <div id="TotalWrite"><li>전체글보기</li><li>175,342,546</li></div>
              <div id="MenuTitle">★ 공지사항</div>
              <div id="MenuContent">
                <ul>
                  <li><img src={L_shape} alt="L"></img> 공지사항  <img src={NewIcon} alt="NewTag"></img></li>
                  <li><img src={L_shape} alt="L"></img> 이용정책</li>
                </ul>
              </div>
              <div id="MenuTitle">★ 신고하기/문의하기</div>
              <div id="MenuContent">
                <ul>
                  <li><img src={L_shape} alt="L"></img> 카페 1:1 고객센터</li>
                  <li><img src={L_shape} alt="L"></img> 밈품명품 광고 문의하기</li>
                </ul>
              </div>
              <div id="MenuTitle">★ 밈품명품 이용팁</div>
              <div id="MenuContent">
                <ul>
                  <li><img src={L_shape} alt="L"></img> 슬기로운 밈품명품정보</li>
                  <li><img src={L_shape} alt="L"></img> 밈품명품 공식 아카이브</li>
                </ul>
              </div>
              <div id="MenuTitle">★ 중나 행복나눔</div>
              <div id="MenuContent">
                <ul>
                  <li><img src={L_shape} alt="L"></img> 포카 무료나눔 <img src={NewIcon} alt="NewTag"></img></li>
                  <li><img src={L_shape} alt="L"></img> 사골짤 무료나눔 <img src={NewIcon} alt="NewTag"></img></li>
                  <li><img src={L_shape} alt="L"></img> 손글씨/이미지나눔 <img src={NewIcon} alt="NewTag"></img></li>
                  <li><img src={L_shape} alt="L"></img> 어려운 이웃 사연  <img src={NewIcon} alt="NewTag"></img></li>
                </ul>
              </div>
              <div id="MenuTitle">★ 밈뮤니티</div>
              <div id="MenuContent">
                <ul>
                  <li><img src={L_shape} alt="L"></img> 긍정거래 후기 <img src={NewIcon} alt="NewTag"></img></li>
                  <li><img src={L_shape} alt="L"></img> 불량거래 후기 <img src={NewIcon} alt="NewTag"></img></li>
                </ul>
              </div>
              <div id="MenuTitle">★ 밈품명품 회원 이벤트</div>
              <div id="MenuContent">
                <ul><p>이벤트</p>
                  <li><img src={L_shape} alt="L"></img> 당첨자발표/종료</li>
                  <li><img src={L_shape} alt="L"></img> 이벤트 신청하기</li>
                </ul>
              </div>
              <div id="MenuTitle">★ 밈당포 할인특구</div>
              <div id="MenuContent">
                <ul>
                  <li><img src={L_shape} alt="L"></img> 꿀딜특구</li>
                  <li><img src={L_shape} alt="L"></img> 할인특가  <img src={NewIcon} alt="NewTag"></img></li>
                  <li><img src={L_shape} alt="L"></img> 짤짤이 처분</li>
                </ul>
              </div>
          </div>
        </div>

        
      </DownSideMenu>
      <DownSideImg>

          <img src={bottomImg} alt=""></img>
      
      </DownSideImg>
    </div>
  )
  }
const UpSideMenuBar = styled.div`
  position: relative;
  left: 307px;
  width: 200px;
  /* height: 965px; */
  height: 468px;
    margin-top: 50px;
    border: 4px solid #cfcfcf;
    background: #fff;
    outline: 2px solid #000;

  ul {
    padding:0;
  }
  
  li{
    list-style: none;
  }
  #head{
    #my-activity {
      color: #959595;
    }
  }
  #tab-title{
    ul{
      display: flex;
      padding-left: 5px;
      
      margin-top: 3px;
      margin-bottom: 0px;
      
    }

    li{
      font-size: 12px;
      padding: 7px;
      width: 70px;
      font-weight: 600;
    }
  }

  #BookMarkIcon{
    float: left;
    margin-left: 5px;
    margin-top: 3px;
  }

  #head{
    border-bottom: 1px solid #cfcfcf;
    height: 35px;
    
  }

  #Userprofile{
    
    font-size: 12px;
    margin: 15px 30px;
    img{
      float: left;
      margin-left: -20px;
      padding: 0;
    }  
    

    #gradeBox{
      font-size: 10px;
      border: 1px solid #DBDBDB;
      padding: 1px 5px;
      color: darkgray;
    }

    #Nick{   
      margin: 0;
    }
    
    #profile-info {
      
      text-align:left;
      margin: 5px 2px;
      li {
        padding: 2px 0;
        color: #666666;
      }
      ul{
        /* display: flex; */
      }
    }
  }

  #CafeInfo {
    border-bottom: 1px solid #cfcfcf;
    height: 0px;
    text-align:left;
    
    padding: 0 7px;
    font-size: 13px;
    #Topic{
      border-bottom: 1px solid #cfcfcf;
      border-top: 1px solid #cfcfcf;
      padding: 10px 0 10px 0;
      font-size:12px
    }

    #Queen {
      display: flex;
      align-items: center;
      padding: 10px 0;
      img {
        margin-top: 5px;
      }
    }

    #Invite{
      display: flex;
      justify-content:space-between;
      height: 30px;
      font-size:14px;

      #text{
        width: 55px;
        font-size:11px;
        color: #000AFF;
        font-weight : 600;
      }
    }
    #CafeInformation {
      span {
        float: right;
        color: #666666;
      }
      li {
        margin-bottom: 7px;
      }
    }
    #Btns{
      button{
        width: 195px;
        margin-left: -5px;
        height: 35px;
        margin-bottom:13px ;
        border: none;
        box-shadow: 1px 1px 1px 1px #bbbbbb inset;
        background: #DBDBDB;
        
      }
      #BtnHotpink{
        background: #FF50E2;
        color: #fff;
        box-shadow:none;
      }
    }
  }
`

const DownSideMenu = styled.div`
  position: relative;
  left: 307px;
  width: 200px;
  height: 1105px;
  margin-top: 25px;
  border: 4px solid #cfcfcf;
  background: #fff;
  outline: 2px solid #000;
  li{
    list-style: none;
  }
  #MenuTitle{
    padding: 10px;
    border-top: 2px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;
  }
  #MenuContent{
    /* float: left; */
    ul{
      text-align: left;
      margin-left:-20px;
    }
    li{
      margin-top: 4px;
    }
  }

  input{
    height: 22px;
    border-radius: 0%;
    border:0;
    width: 151px;
    margin-right: 1.5px;
    box-shadow: 0.2px 0.3px 5px 0px #ff50E2 inset;
  }
  button{
    border-radius: 0%;
    height: 24px;
    border: 0;
    top:0px;
    position: relative;
    width: 40px;
    background-color: #ff50E2;
    color: #fff;
    font-size: 10.5px;
  }
  #TotalWrite{
    justify-content: space-between;
    display: flex;
    li{
      width: 100px;
      height: 35px;
      font-size: 14px;
      margin-top: 15px;
      font-weight:500;
    }
    /* border-bottom: 2px solid #cfcfcf; */
  }
`

const DownSideImg = styled.div`
  
`
export default Sidebar