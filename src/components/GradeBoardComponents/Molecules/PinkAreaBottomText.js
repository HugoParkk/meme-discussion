import React from "react";
import PinkAreaTitle from "../Atoms/PinkAreaTitle";
import PinkAreaSubTitle from "../Atoms/PinkeAreaSubTitle";

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
