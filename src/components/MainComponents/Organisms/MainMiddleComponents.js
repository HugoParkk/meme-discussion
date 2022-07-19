import React from 'react';
import styled from 'styled-components';

import twinkle from "../../../images/main_page/twinkle_bg_c.png";
import Card from "../../../images/main_page/Card_e.png";
import plus_box from "../../../images/main_page/plus_box.png";
import phone from "../../../images/main_page/card_phone.jpg";
import dosa from "../../../images/main_page/card_dosa.jpg";
import heart from "../../../images/main_page/jinyoung_heart.png";
import mimgi from "../../../images/main_page/mimgi.png";


function MainMiddle() {
  return (
    <Wrap>
              <div id="best_JJal">
                <div id="text"><b>BEST ZZAL : 내가 제일 '짤'나가{" "}</b>
                <div id="best_more">
                  더보기 
                  <img src={plus_box}></img>
                </div>
                </div>
                <div className="card_set">
                  <div className="card">
                    <div id="name">짤 이름</div>
                    <div id="car_img">
                      <img src={phone} />
                    </div>

                    <div id="lorem">
                      짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤
                      설명 짤 설명 짤 설명 짤 설명 짤 설명{" "}
                    </div>
                    <img src={Card} />
                  </div>

                  <div className="card center">
                    <div id="name">짤 이름</div>
                    <div id="car_img">
                      <img src={heart} />
                    </div>
                    <div id="lorem">
                      짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤
                      설명 짤 설명 짤 설명 짤 설명 짤 설명{" "}
                    </div>
                    <img src={Card} />
                  </div>

                  <div className="card">
                    <div id="name">짤 이름</div>
                    <div id="car_img">
                      <img src={dosa} />
                    </div>
                    <div id="lorem">
                      짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤 설명 짤
                      설명 짤 설명 짤 설명 짤 설명 짤 설명{" "}
                    </div>
                    <img src={Card} />
                  </div>
                </div>
              </div>
              <div id="Rank">
                <div id="title">
                  <img src={mimgi}></img>
                </div>
                <ul id="ran">
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                  <li class="lv1">
                    <ul>
                      <li id="number">1.</li>
                      <li>떡고짤</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
      </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  margin: 28px 0 10px 0;
  padding: 0;
  position: relative;
  #lorem {
    position: absolute;
    width: 156px;
    height: 52px;
    font-size: 9px;
    margin-top: 260px;
    margin-left: 47px;
    color: #fff;
  }
  #best_JJal {
    width: 670px;
    height: 424px;
    background: url(${twinkle});
    margin: 0 0 14px 0;
    border: 4px solid #ccc;
    outline: 2px solid #000;

    #text {
      font-size: 18px;
      padding: 10px;
      margin-left: 10px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    #best_more {
        width: 55px;
        padding: 0 10px 0 0;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }
    .card {
      margin: auto -16px;
      #name {
        position: absolute;
        box-sizing: border-box;
        margin-left: 100px;
        margin-top: 53px;
        color: #fff;
        cursor: pointer;
      }
      img {
        width: 248px;
        height: 362px;
      }
      #lorem{cursor: pointer;}
      #car_img {
        margin: 89px 44px;
        width: 155px;
        height: 155px;
        position: absolute;
        background-color: #d9d9d9;
        border: 3px solid #838383;
        outline: 2px solid #000000;
        cursor: pointer;
        img {
          width: 141px;
          height: 141px;
          margin: 4px 4px;
          border: 3px solid #838383;
          outline: 2px solid #515151;
        }
      }
    }
    .card_set {
      display: flex;
      justify-content: center;
      margin-top: -12px;
      /* top: 50px; */
      /* position: relative; */

      .center {
        margin-bottom: 80px;
      }
    }
  }

  #Rank {
    outline: 2px solid #000;
    width: 170px;
    height: 432px;
    background: magenta;
    margin-left: 20px;
    text-align: center;
    #ran {
      margin-top: 4px;
    }
    #number {
      width: 30px;
      height: 30px;
    }
    #title {
      width: 168px;
      height: 40px;
      background: #fa00d0;
      line-height: 2.5;
      img {
        margin-top: 6px;
      }
    }
    ul > li > ul {
      display: flex;
      margin-left: 4px;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      color: yellow;
      cursor: pointer;
    }
    .lv1 > ul > li {
      width: 115px;
      height: 30px;
      background: #000;
      margin: 4px;

      line-height: 2;
      box-shadow: 2.5px 2.5px 2px 1px #888 inset;
    }

    .lv1 > ul {
      width: 160px;
    }
    .lv1 {
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
  }
`;


export default MainMiddle;