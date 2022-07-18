import React, { useState } from "react";
import styled from "styled-components";

import Popup from "../../Popup";

function ShopTopNotice(props) {
    const { } = props;

    const [popup, handlerPopup] = useState(false);
    return (
        <>
        {popup && <Popup onClose={handlerPopup} />}
        <Notice>
              <ul class="lv1">
                <li>
                  <ul class="lv2" id="title">
                    <li class="no1"><button></button></li>
                    <li class="no2">제목</li>
                    <li class="no3">작성자</li>
                    <li class="no4">작성일</li>
                    <li class="no4">조회</li>
                  </ul>
                </li>
                <li>
                  <ul class="lv2">
                    <li class="no1"><button class="noticeBtn" onClick={() => { handlerPopup(true); }}>공지</button></li>
                    <li class="no2" onClick={() => { handlerPopup(true); }}>제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 </li>
                    <li class="no3">스태프</li>
                    <li class="no4">2022.05.04</li>
                    <li class="no4">209</li>
                  </ul>
                </li>
                <li>
                  <ul class="lv2">
                    <li class="no1"><button class="noticeBtn" onClick={() => { handlerPopup(true); }}>공지</button></li>
                    <li class="no2" onClick={() => { handlerPopup(true); }}>제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 </li>
                    <li class="no3">스태프</li>
                    <li class="no4">2022.05.04</li>
                    <li class="no4">209</li>
                  </ul>
                </li>
                <li>
                  <ul class="lv2">
                    <li class="no1"><button class="noticeBtn" onClick={() => { handlerPopup(true); }}>공지</button></li>
                    <li class="no2" onClick={() => { handlerPopup(true); }}>제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 목제 </li>
                    <li class="no3">스태프</li>
                    <li class="no4">2022.05.04</li>
                    <li class="no4">209</li>
                  </ul>
                </li>
              </ul>
            </Notice>
        </>
    );
}

const Notice = styled.div`
    width: 830px;
    margin: auto;
    background: #FA00D0;
    outline: 2px solid #000;
    border: 3px solid #FA00D0;
    font-size: 12px;
    color: #FFF;

    ul{list-style: none; margin:0; padding:0;}
    #title{background: #FA00D0; button{border: 0; background: #FA00D0;}}
    .lv1{
      width: 820px;
      margin: auto;
      .lv2{
        height: 40px;
        display:flex;
        background: #FEB6F2;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #FA00D0;
        .no1{
            .noticeBtn{
              width: 45px;
              background: #F7F9BD;
              border-radius: 3px;
              font-size: 12px;
              border: 1px solid #000;
              cursor: pointer;
            }
        }
        .no2{width: 546px; text-align: center; cursor: pointer;}
        .no3{width: 35px; text-align: center;}
        .no4{width: 50px; text-align: center;}
      }
    }
`

export default ShopTopNotice;