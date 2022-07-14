import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
