import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function ShopBoardFooterBtn(props) {
  const [color, setColor] = useState({ color: "black" });
  const [bgColor, setBgColor] = useState({ backgroundColor: "#DBDBDB" });
  const [BorderColor, setBorderColor] = useState({ borderColor: "#DBDBDB" });
  const [count, setCount] = useState(1);
  console.log(color.color);
  return (
    <>
      <GlobalStyle />
      <Btn
        onClick={() => {
          if (count === 1) {
            setColor({ color: "#ff50e2" });
            setBgColor({ backgroundColor: "white" });
            setBorderColor({ borderColor: "#DBDBDB" });
            setCount(0);
          } else {
            setColor({ color: "black" });
            setBgColor({ backgroundColor: "#DBDBDB" });
            setBorderColor({ borderColor: "#DBDBDB" });
            setCount(1);
          }
        }}
        Btnon={[color.color, bgColor.backgroundColor, BorderColor.borderColor]}
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
  border-color: ${(props) => props.Btnon[2]};
`;
export default ShopBoardFooterBtn;
