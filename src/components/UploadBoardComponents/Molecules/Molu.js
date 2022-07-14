import React from "react";
import styled from "styled-components";
import ExchangeRateForm from "../Atoms/ExchangeRateForm";
import RightBarMoneyText from "../Atoms/RightBarMoneyText";
import RightSideBarTitle from "../Atoms/RightSideBarTitle";
import UploadBoardPublicText from "../Atoms/UploadBoardPublicText";
function Molu() {
  return (
    <>
      <DB>
        <RightSideBarTitle text={"짤 판매 설정"} type={""} />
        <UploadBoardPublicText text={"가격"} type={""} />
        <UploadBoardPublicText text={"WKLAY"} type={""} />
        <ExchangeRateForm />
        <D>
          <RightBarMoneyText />
        </D>
      </DB>
    </>
  );
}
let DB = styled.div`
  border-bottom: 2px solid black;
  width: 300px;
  height: 200px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
let D = styled.div`
  border-bottom: 2px solid gray;
  grid-column: 1 / 3;
`;
export default Molu;
