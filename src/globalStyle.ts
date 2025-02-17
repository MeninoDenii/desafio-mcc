import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button, textarea, select {
    font: inherit;
    border: none;
    outline: none;
  }

  html, body {
    height: 100%;
  
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
