import React from "react";
import PinkAreaTitle from "./PinkAreaTitle";
import PinkAreaSubTitle from "./PinkeAreaSubTitle";

function PinkAreaBottomText(props) {
  return (
    <>
      <PinkAreaTitle text="내 활동정보" />
      {props.data.map((arr, i) => {
        return <PinkAreaSubTitle text={arr} type="black" key={i} />;
      })}
    </>
  );
}

export default PinkAreaBottomText;
