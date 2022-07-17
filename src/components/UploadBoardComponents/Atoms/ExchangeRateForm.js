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
  width: 100px;
  height: 18px;
  border: 1.5px solid black;
  border-radius: 5px;
  color: #ff50e2;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 13pt;
  text-align: right;
  padding: 10px;
  grid-column: 2 / 3;
  ::placeholder {
    color: #ff50e2;
    font-size: 13pt;
    text-align: right;
    font-weight: bold;
  }
`;

export default ExchangeRateForm;
