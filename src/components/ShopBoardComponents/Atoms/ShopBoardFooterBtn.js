import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function ShopBoardFooterBtn(props) {
  const [color, setColor] = useState("black");
  const [bgColor, setBgColor] = useState("#DBDBDB");
  const [borderColor, setBorderColor] = useState("#DBDBDB");
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0);
  function StyleCheange() {
    if (count === key) {
      setColor("#ff50e2");
      setBgColor("white");
      setBorderColor("2px soild #999999");
      // setCount(props.num);
    } else {
      setColor("black");
      setBgColor("#DBDBDB");
      setBorderColor("#DBDBDB");
      // setCount(props.num);
    }
  }
  // setCount(props.num);
  // setColor({ color: "#ff50e2" });
  // setBgColor({ backgroundColor: "white" });
  // console.log(count);
  return (
    <>
      <GlobalStyle />
      <Btn
        onClick={() => {
          setKey(props.num);
          StyleCheange();
        }}
        Btnon={[color, bgColor, borderColor]}
      >
        {props.text}
      </Btn>
    </>
  );
}
const Btn = styled.button`
  cursor: pointer;
  z-index: 2;
  background-color: ${(props) => props.Btnon[1]};
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.Btnon[0]};
  border: ${(props) => props.Btnon[2]}; ;
`;
export default ShopBoardFooterBtn;
