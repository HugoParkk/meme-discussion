import React from "react";
import PinkAreaSubTitle from "../Atoms/PinkeAreaSubTitle";
import PinkAreaTitle from "../Atoms/PinkAreaTitle";

function PinkAreaTextGroup(props) {
  return (
    <>
      <PinkAreaTitle text={props.text} />
      <PinkAreaSubTitle text={props.subText} />
    </>
  );
}

export default PinkAreaTextGroup;
