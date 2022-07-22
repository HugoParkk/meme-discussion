import React from "react";
import styled from "styled-components";

function LoginBanner(props) {
  return <StyledImage src={props.src} />;
}

const StyledImage = styled.img`
  width: 28rem;
  height: 125px;
  margin: 0 auto;
  display: block;
`;

export default LoginBanner;
