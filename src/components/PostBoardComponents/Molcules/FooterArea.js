import React from "react";
import PostTitle from "../Atoms/PostTitle";
import PostAreaBottomText from "../../PostBoardComponents/Molcules/PostBottomText";
import PostTextGroup from "../Atoms/PostTextGroup";
import PostLine from "../Atoms/PostLine";
import styled from "styled-components";

function FooterArea(props) {
  return (
    <PinkDiv>
      <PostTitle />
      <PostTextGroup data={props.data} />
      <PostLine />
      <StyledDiv>
        <PostAreaBottomText data={props.arr} />
      </StyledDiv>
    </PinkDiv>
  );
}

const PinkDiv = styled.div`
  background-color: rgba(255, 80, 226, 0.1);
  width: 80%;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export default FooterArea;
