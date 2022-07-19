import React, {useState} from 'react';
import styled from 'styled-components';

// Popup
import Popup from '../../Popup';

// images
import Plus from "../../../images/main_page/plus.png";

// molcules
import SellJJal from "../Molcules/Top/Sellimg";

function MainTop(props) {
  const { } = props;
  const [popup, handlerPopup] = useState(false);

  return (
    <Wrap>
      {popup && <Popup onClose={handlerPopup} />}
      <SellJJal onClick={() => { handlerPopup(true); }}/>
      <div id="noticeUpdate" onClick={() => { handlerPopup(true); }}>
        <div id="noticeTitle">
          <ul>
            <li>
              <a class="noticeText">공지 및 업데이트</a>
            </li>
            <li>
              <a class="noticePlus">더보기<img src={Plus}></img></a>
            </li>
          </ul>
        </div>
        <div id="noticeContent">
          <div id = "listYellow">
              <ul>
                <li>
                  <button>공지</button>&nbsp;&nbsp;
                  <a>
                    출석미션 보상받기 오류 해결 완료되...&#91;6&#93;
                  </a>
                  <span>209</span>
                </li>
                <li>
                  <button>공지</button>&nbsp;&nbsp;
                  <a>
                    출석미션 보상받기 오류 해결 완료되...&#91;6&#93;
                  </a>
                  <span>209</span>
                </li>
                <li>
                  <button>공지</button>&nbsp;&nbsp;
                  <a>
                    출석미션 보상받기 오류 해결 완료되...&#91;6&#93;
                  </a>
                  <span>209</span>
                </li>
              </ul>
            </div>
          <div id="listBase">
              <ul>
                <li>
                  <a>출석미션 보상받기 오류 해결 완료되...</a>
                  <span class="YellowText">&#91;6&#93;</span>
                  <span class="ViewNum">209</span>
                </li>
                <li>
                  <a>출석미션 보상받기 오류 해결 완료되...</a>
                  <span class="YellowText">&#91;6&#93;</span>
                  <span class="ViewNum">209</span>
                </li>
                <li>
                  <a>출석미션 보상받기 오류 해결 완료되...</a>
                  <span class="YellowText">&#91;6&#93;</span>
                  <span class="ViewNum">209</span>
                </li>
              </ul>
          </div>
        </div>
        
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 435px;
  position: relative;

  #noticeUpdate {
    width: 330px;
    height: 435px;
    position: absolute;
    right: 0;

    background: #fa00d0;
    color: #ffffff;

    border: 4px solid #ff50e2;
    outline: 2px solid #000;

    ul {
      margin: 0;
      padding: 0;
    }
    #noticeTitle {
      width: 330px;
      height: 40px;
      border-top: 2px solid #ff50e2;
      border-bottom: 2px solid #ff50e2;

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 8px 15px;
      }
      li{
        cursor: pointer;
        .noticeText {
          font-size: 18px;
          font-weight: 600;
        }
        .noticePlus {
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 55px;
        }
      }
    }
    #noticeContent {
      width: 330px;
      height: 160px;
      li {
        font-size: 13px;
        padding: 15px 0;
        border-bottom: 1px solid #ff50e2;
        button{cursor: pointer;}
        a{cursor: pointer;}
      }
        #listYellow {
          width: 100%;
          height: 160px;
          ul {
            position: absolute;
            list-style: none;
            li {
              width: 325px;
              padding-left: 5px;
              span {margin-left: 10px;}
              button {
              font-size: 12px;
              background-color: #f7f9bd;
              border: 1px solid #000;
              border-radius: 3px;
              padding: 2px 10px;
              }
            }
          }
        }
        #listBase {
          width: 330px;
          height: 160px;
          ul {
          list-style-position: inside;
            li {
            padding-left: 10px;
            .ViewNum {
              margin-left: 40px;
            }
            
            .YellowText {
              color: #faff00;
            }
          }
        }
      }
    }        
  }

`;



export default MainTop;