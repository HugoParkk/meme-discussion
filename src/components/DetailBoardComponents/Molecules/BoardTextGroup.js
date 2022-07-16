import React from "react";
import styled from "styled-components";

function BoardTextGroup() {
    return (
      <StyledDiv>
        <ul>
            <li class="lv1">
                <ul class="lv2">
                    <li>상품 상태</li>
                    <li class="lv3">700*700</li>
                    <li>px</li>
                </ul>
            </li>
            <li>
                <ul class="lv2">
                    <li>생성 날짜</li>
                    <li>2022.05.04</li>
                    <li>209</li>
                </ul>
            </li>
        </ul>
      </StyledDiv>
    );
  }

const StyledDiv = styled.div`
    ul{list-style:none; margin: 0; padding: 0;}
    width: 280px;
    font-size: 13px;
    color: #000;

    .lv1 {
        padding: 0 0 15px 0;
    }
    .lv2{
            display: flex;
            .lv3{padding: 0 35px 0 0;}
            li{
                padding: 0 20px 0 0;
            }
        }
    
`;

export default BoardTextGroup;