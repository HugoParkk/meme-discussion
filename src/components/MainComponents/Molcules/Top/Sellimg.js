import React from 'react';
import styled from 'styled-components';

import JJalSell from "../../../../images/main_page/JJal_sellMain.png";

function SellJJal() {
    return(
    <Sell>
        <img src={JJalSell}></img>
    </Sell>
    );
}

const Sell = styled.div`
    img {
      height: 430px;
      position: absolute;
      left: 0;
      border: 6px solid #cfcfcf;
      outline: 2px solid #000;
      cursor: pointer;
    }
`

export default SellJJal;