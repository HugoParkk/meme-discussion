// 전 페이지에 공통으로 들어간 header 입니다.
import React from "react";

// Organism 임포트
import HeaderTop from "./HeaderComponents/Organisms/Header_Top";
import HeaderTitle from "./HeaderComponents/Organisms/Header_TitleImg";
import HeaderBar from "./HeaderComponents/Organisms/Header_Bar";

// images ---------------------------



function Header() {
  return (
    <>
      <HeaderTop />

      <HeaderTitle />

      <HeaderBar />
    </>
  );
}

export default Header;
