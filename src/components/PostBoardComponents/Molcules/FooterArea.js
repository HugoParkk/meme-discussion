import React from "react";
import PostTitle from "../Atoms/PostTitle";
import PostAreaBottomText from "../../PostBoardComponents/Molcules/PostBottomText";
import PostTextGroup from "../Atoms/PostTextGroup";
import PostLine from "../Atoms/PostLine";
import styled from "styled-components";



function FooterArea(props) {
  return (
    <PinkDiv>
      <StyledDiv>
        <PostTitle />
        <PostTextGroup data={props.data} />
        <PostLine />
      </StyledDiv>
      <PostAreaBottomText data={props.arr} />
    </PinkDiv>
  );
}

const PinkDiv = styled.div`
  background-color: rgba(255, 80, 226, 0.1);
  width: 58.5%;
  height: 10rem;
  margin-left: 13rem;
  margin-top: -1007px;
`;

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default FooterArea;
