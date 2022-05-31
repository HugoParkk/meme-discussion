import React from "react";
import GradeTextGroup from "./GradeTextGroup";

const arr = [{ text: "자동등업", subText: "매니저가 설정한 조건을 " }];

function GradePinkArea() {
  return (
    <div>
      <GradeTextGroup data={arr} />
    </div>
  );
}

export default GradePinkArea;
