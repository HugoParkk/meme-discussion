import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../../Popup";

function BoardFooter(props) {
  const arr = props.data;

  const { } = props;

  const [popup, handlerPopup] = useState(false);

  return (
    <>
    {popup && <Popup onClose={handlerPopup} />}
      <StyledDiv>
        <Text type={arr.type} onClick={() => { handlerPopup(true); }}>{arr.text}</Text>
        <Sub onClick={() => { handlerPopup(true); }}>{arr.name}</Sub>
        <Sub onClick={() => { handlerPopup(true); }}>{arr.date}</Sub>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #feb6f2;
  border-bottom: 2px solid magenta;
`;

const Text = styled.div`
  width: 60%;
  color: white;
  cursor: pointer;
`;

const Sub = styled.div`
  color: white;
  cursor: pointer;
`;

export default BoardFooter;
