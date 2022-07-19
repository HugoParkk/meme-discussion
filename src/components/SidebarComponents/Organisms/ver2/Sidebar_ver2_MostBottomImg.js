import React from "react";
import styled from "styled-components";

import bottomImg from "../../../../images/public_compoment/Group 13.png";

function SidebarMostBottomImg(){
    return (
        <DownSideImg>
        <img src={bottomImg} alt=""></img>
        </DownSideImg>
    );
}

const DownSideImg = styled.div`
  width: 208px;
  position: relative;
  // left: 305px;

  margin: 30px 0;
  img {
    width: 212px;
    height: 110px;
  }
`;

export default SidebarMostBottomImg;