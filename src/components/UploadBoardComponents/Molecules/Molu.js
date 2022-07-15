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
        <RightSideBarBtn text={"임시등록"} />
        <RightSideBarBtn text={"매물 게시"} type={"pink"} />
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
  border: 3px solid black;
  width: 11.8rem;
  height: 47rem;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-left: -185px;
  margin-top: 37px;
  z-index: 999;
`;
let Text = styled.div`
  font-size: 13pt;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 10px;
  width: 60%;
`;
let D = styled.div`
  border-bottom: 2px solid #dbdbdb;
  padding-bottom: 5px;
  grid-column: 1 / 3;
`;
let DI = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 2px solid #dbdbdb;
`;
let DA = styled.div`
  height: 120px;
  padding-bottom: 10px;
  border-bottom: 2px solid #dbdbdb;
`;
const Wrap = styled.div`
  margin-top: 10px;
  width: 11.8rem;
  position: relative;
  left: 50%;
  padding: 10px 0;
  transform: translateX(-50%);
  background-color: pink;
`;
export default Molu;
