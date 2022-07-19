import React from 'react';
import styled from 'styled-components';

function noticeContent () {
    return(
        <Form1>
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
        </Form1>
    );
}

const Form1 = styled.div`
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
`;

export default noticeContent;