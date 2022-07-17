import React from "react";
import { Link } from "react-router-dom";
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
function Calender(props) {
  return (
    <>
      <DB>
        <RightSideBarTitle text={"짤 판매 설정"} type={""} />
        <UploadBoardPublicText text={"가격"} type={""} />
        <info>ⓘ</info>
        <Flex>
          <UploadBoardPublicText text={"WKLAY"} type={""} />
          <ExchangeRateForm active />
        </Flex>
        <D>
          <RightBarMoneyText text={"$758.60"} />
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
        <Link to={{
          pathname: `/uploadcomplete/`,
          state: { name: props.name, img: props.src }
        }}><RightSideBarBtn text={"매물 게시"} type={"pink"} /></Link>
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
  background-color: white;
  border: 2px solid black;
  width: 196px;
  height: 754px;
  display: flex;
  padding: 12.2px;
  flex-direction: column;
  margin-left: -187px;
  margin-top: 18px;
  z-index: 3;
  info {
    font-size: 13px;
    font-weight: bold;
    position: absolute;
    right: 0;
    margin: 51px 26px 0 0;
    color: #929292;
  }
`;

// 아 하기 싫다ㅏ 이 주석 지우는 친구는 상품이 있으니 지우고 박종연에게 전화해주세요.
let Text = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-top: 9px;
  margin-right: 10px;
`;
let D = styled.div`
  border-bottom: 2px solid #d0d0d0;
  padding-bottom: 5px;
  margin-top: -7px;
  grid-column: 1 / 3;
`;
let DI = styled.div`
  padding: 2px;
  border-bottom: 2px solid #d0d0d0;
`;
let DA = styled.div`
  height: 120px;
  padding-bottom: 13px;
  border-bottom: 2px solid #d0d0d0;
  margin-bottom: 40px;
  letter-spacing: -0.7px;
`;
const Wrap = styled.div`
  margin-top: 10px;
  width: 192px;
  height: 100px;
  padding: 10px;
  background-color: #FFF0F9;
  margin-left: -10px;
`;
export default Calender;
