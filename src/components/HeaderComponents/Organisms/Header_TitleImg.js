import React from "react";
import styled from "styled-components";

import headerSrc from "../../../images/public_compoment/HeaderMain.png";

function HeaderTitle() {
    return(
        <HeaderStyleTest>
        <h1></h1>
        </HeaderStyleTest>
    );
}

const HeaderStyleTest = styled.header`
  width: 1080px;
  background: url(${headerSrc}) no-repeat;
  height: 126px;
  top: -20px;
  margin: 0 auto;
  /* margin-bottom: px; */
  position: relative;
  /* margin-top: 40px; */
`;

export default HeaderTitle;

