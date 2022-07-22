import React from "react";
import Text from "../Atoms/Text";
import styled from "styled-components";

function TextGroup(props) {
  return (
    <>
      {props.type === "BIG" ? (
        <StyledBIG>
          {props.data.map((arr, i) => {
            return <Text text={arr.text} type={arr.type} key={i} />;
          })}
        </StyledBIG>
      ) : (
        <StyledSMALL>
          {props.data.map((arr, i) => {
            return <Text text={arr.text} type={arr.type} key={i} />;
          })}
        </StyledSMALL>
      )}
    </>

    // {props.type === "big" ? (
    //     <StyledABig href="#">{props.text}</StyledABig>
    //   ) : (
    //     <StyledASmall href="#">{props.text}</StyledASmall>
    //   )}
  );
}

const StyledBIG = styled.div`
  margin-top: 1.3em;
  margin-bottom: 2em;
  text-align: center;
`;
const StyledSMALL = styled.div`
  margin-top: 2em;
  text-align: center;
`;

export default TextGroup;
