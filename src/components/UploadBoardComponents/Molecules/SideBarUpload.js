import React from "react";
import styled from "styled-components";
import SideBarSnsUploadText from "../Atoms/SideBarSnsUploadText";

function SideBarUpload() {
  return (
    <>
      <Pink>
        <SideBarSnsUploadText text={"인스타그램"} />
        <SideBarSnsUploadText text={"트위터"} />
        <SideBarSnsUploadText text={"페이스북"} />
      </Pink>
    </>
  );
}
let Pink = styled.div`
  background-color: pink;
  width: 190px;
  height: 110px;
  text-align: left;
`;
export default SideBarUpload;
