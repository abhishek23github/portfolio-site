import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: #0d0d0d;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    position: relative;
    overflow-y: auto !important;     /* 👈 FORCE vertical scroll */
    overscroll-behavior-y: none;     /* 👈 Prevent bounce/lock on some browsers */
  }

  html {
    overflow-y: auto;
  }
`;

export default GlobalStyle;
