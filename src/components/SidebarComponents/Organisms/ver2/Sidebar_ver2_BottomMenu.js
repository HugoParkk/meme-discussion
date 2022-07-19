import React, {useState} from "react";
import styled from "styled-components";

import Fonts from "../../../GlobalFonts";

import Popup from "../../../Popup";

import NewIcon from "../../../../images/public_compoment/icon_New.png";
import L_shape from "../../../../images/public_compoment/L_shape.png";

function SidebarMostBottomImg(props){
    const { } = props;
    const [popup, handlerPopup] = useState(false);

    return (
        <Fonts>
            {popup && <Popup onClose={handlerPopup} />}

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
        
        </Fonts>
    );
}

const DownSideMenu = styled.div`
  position: relative;
  /* left: 307px; */
  width: 208px;
  height: 973px;
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
      height: 26px;
      border-radius: 0%;
      border: 0;
      width: 160px;
      margin-right: 1.5px;
      box-shadow: 0.2px 0.3px 5px 0px #ff50e2 inset;
      padding: 0;
    }
    button {
      border-radius: 0%;
      height: 26px;
      border: 0;
      top: 0px;
      position: relative;
      width: 36px;
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

export default SidebarMostBottomImg;