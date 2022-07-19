import React, { useState } from "react";
import styled from "styled-components";

import Popup from "../../../Popup";

import bookmarkStar from "../../../../images/public_compoment/star_sideMenu.svg";
import profile from "../../../../images/public_compoment/profile.svg";
import crown from "../../../../images/public_compoment/crown.png";

function SidebarTopMenuVer2(props) {
    const { } = props;
    const [popup, handlerPopup] = useState(false);

    return(
        <>
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
                        <a href="http://localhost:3000/upload"><button id="BtnHotpink">게시하기</button></a>
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
        </>
    );
}

const UpSideMenuBar = styled.div`
  position: relative;
  /* left: 307px; */
  width: 208px;
  /* height: 965px; */
  height: 443px;
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
      
      #ab{
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

export default SidebarTopMenuVer2;