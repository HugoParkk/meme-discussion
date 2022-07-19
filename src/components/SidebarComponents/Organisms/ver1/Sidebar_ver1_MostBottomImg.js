import React from "react";
import styled from "styled-components";

import bottomImg from "../../../../images/public_compoment/Group 13.png";
function SidebarMostBottomImg() {
    return(
        <DownSideImg>
            <img src={bottomImg} alt=""></img>
        </DownSideImg>
    );
}


const DownSideImg = styled.div`
  width: 200px;
  position: absolute;

  margin: 30px 0;
  img {
    width: 200px;
    height: 110px;
  }
`;

export default SidebarMostBottomImg;