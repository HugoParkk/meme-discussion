import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;
    background: linear-gradient( to right, rgb(255, 77, 181),
     rgb(255, 203, 245),white,rgb(255, 203, 245), rgb(255, 77, 181));
    a{text-decoration: none; color:#000;}
  }
`;

export default GlobalStyle;
