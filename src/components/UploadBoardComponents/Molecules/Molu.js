import React from "react";
import styled from "styled-components";
import ExchangeRateForm from "../Atoms/ExchangeRateForm";
import RightBarMoneyText from "../Atoms/RightBarMoneyText";
import RightSideBarBtn from "../Atoms/RightSideBarBtn";
import RightSideBarDutyText from "../Atoms/RightSideBarDutyText";
import RightSideBarTitle from "../Atoms/RightSideBarTitle";
import SideBarSnsUploadText from "../Atoms/SideBarSnsUploadText";
import UploadBoardPublicLi from "../Atoms/UploadBoardPublicLi";
import UploadBoardPublicText from "../Atoms/UploadBoardPublicText";
import RightSideBarCalendar from "./RightSideBarCalendar";
function Molu() {
  return (
    <>
      <DB>
        <RightSideBarTitle text={"짤 판매 설정"} type={""} />
        <UploadBoardPublicText text={"가격"} type={""} />
        <Flex>
          <UploadBoardPublicText text={"WKLAY"} type={""} />
          <ExchangeRateForm active />
        </Flex>
        <D>
          <RightBarMoneyText text={"756.80"} />
        </D>
        <Flex>
          <UploadBoardPublicText text={"지속기간"} type={""} />
          <UploadBoardPublicText text={"7일"} type={"pink"} />
        </Flex>
        <DI>
          <RightSideBarCalendar />
        </DI>
        <DA>
          <Text>부과세</Text>
          <Flex>
            <RightSideBarDutyText text={"서비스 세금"} percent={"2.5%"} />
          </Flex>
          <Flex>
            <RightSideBarDutyText text={"창작자 세금"} percent={"7.8%"} />
          </Flex>
        </DA>
        <span><RightSideBarBtn text={"임시등록"} /></span>
        <a href="http://localhost:3000/uploadcomplete"><RightSideBarBtn text={"매물 게시"} type={"pink"} /></a>
        <UploadBoardPublicLi />
        <Wrap>
          <SideBarSnsUploadText text={"인스타그램"} />
          <SideBarSnsUploadText text={"트위터"} />
          <SideBarSnsUploadText text={"페이스북"} />
        </Wrap>
      </DB>
    </>
  );
}
let Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
let DB = styled.div`
  border: 0.2604vw solid black;
  width: 9.8333vw;
  height: 39.1667vw;
  padding: 0.7813vw;
  display: flex;
  flex-direction: column;
  margin-left: -9.6354vw;
  margin-top: 1.9271vw;
  z-index: 999;
`;
let Text = styled.div`
  font-size: 0.9028vw;
  font-weight: bold;
  margin-top: 0.5208vw;
  margin-right: 0.5208vw;
  width: 60%;
`;
let D = styled.div`
  border-bottom: 0.1042vw solid #dbdbdb;
  padding-bottom: 0.2604vw;
  grid-column: 1 / 3;
`;
let DI = styled.div`
  width: 100%;
  height: 26.7778vw;
  border-bottom: 0.1042vw solid #dbdbdb;
`;
let DA = styled.div`
  height: 6.25vw;
  padding-bottom: 0.5208vw;
  border-bottom: 0.1042vw solid #dbdbdb;
`;
const Wrap = styled.div`
  margin-top: 0.5208vw;
  width: 9.8333vw;
  position: relative;
  left: 50%;
  padding: 0.5208vw 0;
  transform: translateX(-50%);
  background-color: pink;
`;
export default Molu;
