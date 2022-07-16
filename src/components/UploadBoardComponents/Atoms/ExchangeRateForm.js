import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function ExchangeRateForm() {
  return (
    <>
      <GlobalStyle />
      <div>
        <YourForm type="text" placeholder="130" />
      </div>
    </>
  );
}
const YourForm = styled.input`
  box-shadow: 1px 1px 10px #ff50e2;
  width: 4.1667vw;
  height: 1.4583vw;
  border: 1.5px solid black;
  border-radius: 0.2604vw;
  color: #ff50e2;
  margin-top: 0.5208vw;
  margin-bottom: 0.7813vw;
  font-size: 0.9167vw;
  text-align: right;
  padding: 0.5208vw;
  grid-column: 2 / 3;
  ::placeholder {
    color: #ff50e2;
    font-size: 0.9167vw;
    text-align: right;
    font-weight: bold;
  }
`;

export default ExchangeRateForm;
