import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body  { 
    font-family: 'Lato', sans-serif; 
  }
`;

export default GlobalStyle;
