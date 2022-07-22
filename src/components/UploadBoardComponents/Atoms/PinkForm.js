import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function PinkForm(props) {
  const changeHandler = (e) => {
    props.changeFunction(e.currentTarget.value);
  }

  return (
    <>
      <GlobalStyle />
      {props.pink === "true" ?
        <YourPinkForm type="text" placeholder={props.placeholder} />
        :
        <YourForm type="text" onChangeCapture={changeHandler} placeholder={props.placeholder} />
      }

    </>
  );
}
const YourPinkForm = styled.input`
  box-shadow: 1px 1px 6px 0px #ff50e2;
  width: 100px;
  height: 18px;
  border: 1px solid black;
  border-radius: 5px;
  color: #ff50e2;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 13px;
  text-align: right;
  padding: 10px;
  grid-column: 2 / 3;
  ::placeholder {
    color: #ff50e2;
    font-size: 13px;
    text-align: right;
    font-weight: bold;
  }
`;

const YourForm = styled.input`
  box-shadow: 1px 1px 4px 0px #ff50e2;
  width: 180px;
  height: 18px;
  border: 1px solid #fc4ee0;
  border-radius: 5px;
  /* color: #ff50e2; */
  /* margin-top: 10px; */
  /* margin-bottom: 15px; */
  font-size: 13px;
  padding: 10px;
  grid-column: 2 / 3;
  ::placeholder {
    /* color: #ff50e2; */
    font-size: 13px;
    text-align: left;
    font-weight: bold;
  }
`;

export default PinkForm;
