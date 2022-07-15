import React from "react";
import PostBoardChangeImg from "../components/PostBoardComponents/Molcules/PostBoardChangeImg";
import GradeLine from "../components/GradeBoardComponents/Atoms/GradeLine";
import WarningHand from "../images/public_compoment/warning_hand.svg";
import PostBoardBellText from "../components/PostBoardComponents/Atoms/PostBoardBellText";
import styled from "styled-components";
import GradeButtonGroup from "../components/GradeBoardComponents/Molecules/GradeButtonGroup";
import HeaderText from "../components/UploadBoardComponents/Atoms/HeaderText";
import HeaderImg from "../components/UploadBoardComponents/Atoms/HeaderImg";
import FooterPostText from "../components/UploadBoardComponents/Molecules/FooterPostText";


const btnArr = [
  { text: "이전으로", type: "white" },
  { text: "홈으로 돌아가기", type: "pink" },
];

function Main() {
  return (
    <>
      <Maindiv>
        <Header1>
          <HeaderImg src={WarningHand} />
          <HeaderText text="짤 매물을 올렸어요!" />
          <GradeButtonGroup data={btnArr} />
        </Header1>
        <Header2>
          <FooterPostText  text="밈품명품에 첫 매물 등록 완료 ! 갓기 회원으로 자동 등업 되었어요!" />
          <PostBoardBellText  />
        </Header2>  
        <GradeLine />
        <PostBoardChangeImg />
      </Maindiv>
    </>
  );
}
const Maindiv = styled.div`
  width: 58.1%;
height: 38em;
  border: 4px solid #cfcfcf;
  background: #fff;
  outline: 2px solid #000;
`;

const Header2 = styled.div`
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  margin-left: -1rem;
`;

const Header1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  
`;

export default Main;
