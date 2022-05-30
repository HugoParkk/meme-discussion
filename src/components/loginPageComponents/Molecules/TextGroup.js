import React from "react";
import Text from "../Atoms/Text";

function TextGroup(props) {
  return (
    <>
      {props.data.map((arr, i) => {
        return <Text text={arr.text} type={arr.type} key={i} />;
      })}
    </>
  );
}

export default TextGroup