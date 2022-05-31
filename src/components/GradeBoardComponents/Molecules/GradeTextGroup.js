import React from "react";
import GradeSubText from "../Atoms/GradeSubText";
import GradeText from "../Atoms/GradeText";

function GradeTextGroup(props) {
  return (
    <>
      {props.data.map((arr, i) => {
        return (
          <>
            <GradeText text={arr.text} type="pink" />
            <GradeSubText text={arr.subText} key={i} />
            <br />
          </>
        );
      })}
    </>
  );
}

export default GradeTextGroup;
