import React from "react";
import styled from "styled-components";
import UploadBoardPublicText from "../Atoms/UploadBoardPublicText";

function UploadMain() {
  return (
    <Main>
      <UploadBoardPublicText text="짤 업로드" />
    </Main>
  );
}

const Main = styled.div`
  display: block;
  width: 60.8%;
  position: relative;
  left: 10%;
  border: 5px solid rgba(0, 0, 0, 0);
  outline: 3px solid black;
  top: 50px;
  padding: 10px;
  font-size: 14pt;
`;

export default UploadMain;
