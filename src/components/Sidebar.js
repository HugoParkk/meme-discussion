import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../components/Popup";

import Fonts from './GlobalFonts';
import bookmarkStar from "../images/public_compoment/star_sideMenu.svg";
import profile from "../images/public_compoment/profile.svg";
import crown from "../images/public_compoment/crown.png";
import NewIcon from "../images/public_compoment/icon_New.png";
import L_shape from "../images/public_compoment/L_shape.png";
import bottomImg from "../images/public_compoment/Group 13.png";

const Sidebar = (props) => {
  const { } = props;

  const [popup, handlerPopup] = useState(false);

  return (
    <Fonts>
      {popup && <Popup onClose={handlerPopup} />}
      <UpSideMenuBar>
        <div id="head" onClick={() => { handlerPopup(true); }}>
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

        <div id="Userprofile" onClick={() => { handlerPopup(true); }}>
          <img src={profile} alt="프로필이미지"></img>
          <div id="abc">
            <div id="UserText">
              <div id="Nick">
                <span id="gradeBox">매니저</span>&nbsp;&nbsp;<b>주인짱</b>
              </div>
            </div>
            <ul id="profile-info">
              <li id="ab">
                <li>since 2002.02.02</li>
                <li>카페소개</li>
              </li>
            </ul>
          </div>
        </div>

        <div id="CafeInfo">
          <ul onClick={() => { handlerPopup(true); }}>
            <li>
              <ul id="Queen">
                <li>
                  <img src={crown} alt="Queen아이콘"></img>
                </li>
                <li>
                  <b>&nbsp;퀸</b>
                </li>
              </ul>
            </li>
            <li>
              <ul id="Invite">
                <li>18,936,555</li>
                <span id="text">초대하기</span>
              </ul>
            </li>
            <li>
              <ul id="CafeInformation">
                <li>
                  <a>
                    즐겨찾는 멤버<span>3,543,257 명</span>
                  </a>
                </li>
                <li>
                  <a>
                    게시판 구독수<span>2,463,669 회</span>
                  </a>
                </li>
                <li>
                  <a>
                    우리카페앱 수<span>152,262 회</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div id="Topic" onClick={() => { handlerPopup(true); }}>
            <a>
              주제 재테크 &gt; <b>NFT</b>
            </a>{" "}
          </div>
          <div id="Btns">
            <ul>
              <li>
                <a href="http://localhost:3000/upload">
                  <button id="BtnHotpink">게시하기</button>
                </a>
              </li>
              <li>
                <button onClick={() => { handlerPopup(true); }}>주인장 전화하기</button>
              </li>
              <li>
                <button onClick={() => { handlerPopup(true); }}>주인장 채팅하기</button>
              </li>
            </ul>
          </div>
        </div>
      </UpSideMenuBar>

      <DownSideMenu>
        <div id="DownSideMenuBar">
          <div id="DownSideMenu">
            <div id="Sidebar-search">
              <input></input>
              <button>검색</button>
            </div>
            <span onClick={() => { handlerPopup(true); }}>
              <div id="TotalWrite">
                <li>전체글보기</li>
                <li>175,342,546</li>
              </div>
              <div id="MenuTitle">★ 공지사항</div>
              <div id="MenuContent" class="noitce">
                <ul>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;공지사항</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;이용정책</a>
                  </li>
                </ul>
              </div>
              <div id="MenuTitle">★ 신고하기/문의하기</div>
              <div id="MenuContent">
                <ul>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;카페 1:1 고객센터</a>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;밈품명품 광고 문의하기</a>
                  </li>
                </ul>
              </div>
              <div id="MenuTitle">밈품명품 이용팁</div>
              <div id="MenuContent">
                <ul>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;슬기로운 밈품명품정보</a>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;밈품명품 공식 아카이브</a>
                  </li>
                </ul>
              </div>
              <div id="MenuTitle">중나 행복나눔</div>
              <div id="MenuContent">
                <ul>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;포카 무료나눔</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;사골짤 무료나눔</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;손글씨/이미지나눔</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;어려운 이웃 사연</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                </ul>
              </div>
              <div id="MenuTitle">밈뮤니티</div>
              <div id="MenuContent">
                <ul>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;긍정거래 후기</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;불량거래 후기</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                </ul>
              </div>
              <div id="MenuTitle">밈품명품 회원 이벤트</div>
              <div id="MenuContent">
                <ul>
                  <p>이벤트</p>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;당첨자발표/종료</a>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;이벤트 신청하기</a>
                  </li>
                </ul>
              </div>
              <div id="MenuTitle">밈당포 할인특구</div>
              <div id="MenuContent">
                <ul>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;꿀딜특구</a>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;할인특가</a>{" "}
                    <img src={NewIcon} alt="NewTag"></img>
                  </li>
                  <li>
                    <img src={L_shape} alt="L"></img>
                    <a href="#">&nbsp;&nbsp;&nbsp;짤짤이 처분</a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
      </DownSideMenu>
      <DownSideImg>
        <img src={bottomImg} alt=""></img>
      </DownSideImg>
    </Fonts>
  );
};

const UpSideMenuBar = styled.div`
  position: relative;
  /* left: 307px; */
  width: 200px;
  /* height: 965px; */
  height: 435px;
  border: 4px solid #cfcfcf;
  background: #fff;
  outline: 2px solid #000;
  /* margin: 40px 0 0 0; */

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
  #my-activity {
    color: #959595;
  }
  #tab-title {
    cursor: pointer;
    ul {
      display: flex;
      padding-left: 5px;

      margin-top: 3px;
      margin-bottom: 0px;
    }

    li {
      font-size: 12px;
      padding: 7px;
      width: 70px;
      font-weight: 600;
    }
  }

  #BookMarkIcon {
    float: left;
    margin-left: 5px;
    margin-top: 3px;
    cursor: pointer;
  }

  #head {
    border-bottom: 1px solid #cfcfcf;
    height: 35px;
  }

  #Userprofile {
    font-size: 12px;
    padding: 13px 0 5px 10px;
    border-bottom: 1px solid #cfcfcf;

    img {
      float: left;
      padding: 0;
      cursor: pointer;
    }

    #UserText {
      #gradeBox {
        font-size: 10px;
        border: 1px solid #dbdbdb;
        padding: 1px 5px;
        color: darkgray;
      }
    }

    #Nick {
      text-align: left;
      padding: 0 10px;
      width: 100px;
      display: inline-block;
      position: absolute;
      font-size: 12px;
      b{cursor: pointer;}
    }

    #profile-info {
      text-align: left;
      margin: 5px 2px;
      font-size: 12px;
      height: 58px;

      #ab {
        position: absolute;
        margin-top: 15px;
        cursor: pointer;
      }
      li {
        width: 110px;
        display: inline-block;
        padding: 2px 5px;
        color: #666666;
      }
    }
  }

  #CafeInfo {
    ul {
      margin: 0;
    }

    #Queen {
      display: flex;
      align-items: center;
      padding: 10px 7px 5px 7px;
      font-size: 13px;
      img {
        margin-top: 5px;
      }
    }

    #Invite {
      display: flex;
      justify-content: space-between;
      height: 30px;
      font-size: 13px;
      text-align: center;
      padding: 0 7px;

      #text {
        width: 55px;
        font-size: 11px;
        color: #000aff;
        font-weight: 600;
        cursor: pointer;
      }
    }

    #CafeInformation {
      font-size: 12px;
      padding: 0 7px 5px 7px;

      span {
        float: right;
        color: #666666;
        font-size: 13px;
      }
      li {
        margin-bottom: 5px;
      }
    }

    #Topic {
      border-bottom: 1px solid #cfcfcf;
      border-top: 1px solid #cfcfcf;
      padding: 8px 5px;
      a {
        font-size: 12px;
      }
    }

    #Btns {
      margin: 8px 0 0 1px;

      button {
        width: 198px;
        height: 35px;
        border: none;
        box-shadow: 1px 1px 1px 1px #bbbbbb inset;
        background: #dbdbdb;
        margin-bottom: 7px;
        cursor: pointer;
      }

      #BtnHotpink {
        background: #ff50e2;
        color: #fff;
        box-shadow: none;
        cursor: pointer;
      }
    }
  }
`;

const DownSideMenu = styled.div`
  position: relative;
  /* left: 307px; */
  width: 200px;
  height: 965px;
  margin: 20px 0 0 0;
  border: 4px solid #cfcfcf;
  background: #fff;
  outline: 2px solid #000;

  a {
    text-decoration: none;
    color: #000;
  }
  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  #Sidebar-search {
    background: #ff50e2;
    input {
      height: 27px;
      border-radius: 0%;
      border: 0;
      width: 160px;
      margin-right: 1.5px;
      box-shadow: 0.2px 0.3px 5px 0px #ff50e2 inset;
      padding: 0;
    }
    button {
      border-radius: 0%;
      height: 27px;
      border: 0;
      top: 0px;
      position: relative;
      width: 38px;
      background-color: #ff50e2;
      color: #fff;
      font-size: 10.5px;
      cursor: pointer;
    }
  }

  #TotalWrite {
    justify-content: space-between;
    display: flex;
    text-align: center;
    li {
      width: 100px;
      height: 30px;
      font-size: 12px;
      margin-top: 13px;
      cursor: pointer;
    }
    /* border-bottom: 2px solid #cfcfcf; */
  }

  #MenuTitle {
    font-size: 12px;
    height: 37px;
    display: flex;
    align-items: center;
    border-top: 2px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;
    padding: 0 15px;
    cursor: pointer;
  }

  #MenuContent {
    font-size: 12px;
    ul {
      padding: 0 15px;
    }
    li {
      margin: 0 0 5px 0;
    }
  }
  .noitce {
    height: 80px;
    li {
      padding: 7px 0;
    }
  }
`;

const DownSideImg = styled.div`
  width: 200px;
  position: absolute;

  margin: 30px 0;
  img {
    width: 200px;
    height: 110px;
  }
`;
export default Sidebar;
