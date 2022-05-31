import React from "react";
import Text from "../Atoms/Text";
import styled from "styled-components";

function TextGroup(props) {
  return (
    <StyledDiv>
      {props.data.map((arr, i) => {
        return <Text text={arr.text} type={arr.type} key={i} />;
      })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
`;

export default TextGroup;
