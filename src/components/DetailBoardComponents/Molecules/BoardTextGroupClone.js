import React from "react";
import styled from "styled-components";

function BoardTextGroupClone() {
  return (
    <BTGC>
      <span>짤 속성</span>
      <ul>
        <li>
          <ul id="Butns">
            <li><button>안전결제 신청</button></li>
            <li><button>안전결제 신청</button></li>
            <li><button>안전결제 신청</button></li>
          </ul>
        </li>
        <li>
          <ul id="Butns">
            <li><button>안전결제 신청</button></li>
            <li><button>안전결제 신청</button></li>
          </ul>
        </li>
      </ul>
    </BTGC>
  );
}

const BTGC = styled.div`
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 13px;
  color: #000;

  span{padding: 13px 0 0 0;}

  ul{list-style: none; padding:0;}
  #Butns{
    display: flex;
    li{
      padding: 0 5px 10px 0;
      button{
        color: #fff;
        background-color: #FF50E2;
        border-radius: 5px;
        border: 0;
        font-size: 12px;
      }
    }
    
  }
`;

export default BoardTextGroupClone;
