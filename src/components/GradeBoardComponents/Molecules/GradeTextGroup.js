import React from "react";
import GradeImage from "../Atoms/GradeImage";
import GradeSubText from "../Atoms/GradeSubText";
import GradeText from "../Atoms/GradeText";

function GradeTextGroup(props) {
  return (
    <>
      {props.data.map((arr, i) => {
        return (
          <div key={i}>
            {
              // svg import받고 넘겨주기
              arr.img === "yes" ? <GradeImage src={arr.src} /> : <></>
            }
            <GradeText text={arr.text} type={arr.type} />
            <GradeSubText text={arr.subText} />
            <br />
          </div>
        );
      })}
    </>
  );
}

export default GradeTextGroup;
